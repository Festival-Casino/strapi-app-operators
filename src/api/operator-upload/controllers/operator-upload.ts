export default {
  async create(ctx: any) {
    const { operatorName, contactName, contactNumber, email } = ctx.request.body;
    const { files } = ctx.request.files || {};

    if (!operatorName || !contactName || !contactNumber || !email || !files) {
      return ctx.badRequest('Missing required fields.');
    }

    const folderName = operatorName.toLowerCase().replace(/\s+/g, '-');
    const folderPath = `/${folderName}`;

    let folder = (
      await strapi.entityService.findMany('plugin::upload.folder', {
        filters: { name: folderName, path: folderPath },
      })
    )[0];

    if (!folder) {
      folder = await strapi.entityService.create('plugin::upload.folder', {
        data: {
          name: folderName,
          path: folderPath,
          pathId: Date.now().toString(),
        },
      });
    }

    const fileArray = Array.isArray(files) ? files : [files];

    const uploaded = await Promise.all(
      fileArray.map(async (file) => {
        return await strapi.plugin('upload').service('upload').upload({
          data: {
            fileInfo: {
              name: file.name,
              alternativeText: file.name,
              caption: file.name,
              folder: folder.id,
            },
          },
          files: file,
        });
      })
    );

    const flatFiles = uploaded.flat();

    const metadata = await Promise.all(
      uploaded.map((file) => {
        return strapi.entityService.create('api::operator-upload.operator-upload', {
          data: {
            operatorName,
            contactName,
            contactNumber,
            email,
            folderName,
            file: file.id,
          },
        });
      })
    );

    return ctx.send({
      message: 'File(s) uploaded into the correct folder.',
      folder: { id: folder.id, name: folder.name },
      files: uploaded,
      metadata,
    });
  },
};
