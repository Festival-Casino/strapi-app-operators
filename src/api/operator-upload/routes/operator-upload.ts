/**
 * operator-upload router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::operator-upload.operator-upload');

export default {
  routes: [
    // {
    //   method: 'GET',
    //   path: '/operator-uploads',
    //   handler: 'operator-upload.find',
    // },
    // {
    //   method: 'GET',
    //   path: '/operator-uploads/:id',
    //   handler: 'operator-upload.findOne',
    // },
    {
      method: 'POST',
      path: '/operator-uploads',
      handler: 'operator-upload.create',
    },
    // {
    //   method: 'PUT',
    //   path: '/operator-uploads/:id',
    //   handler: 'operator-upload.update',
    // },
    // {
    //   method: 'DELETE',
    //   path: '/operator-uploads/:id',
    //   handler: 'operator-upload.delete',
    // },
  ],
};
