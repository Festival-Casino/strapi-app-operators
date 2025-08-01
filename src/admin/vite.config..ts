// import { mergeConfig, type UserConfig } from 'vite';

// export default (config: UserConfig) => {
//   // Important: always return the modified config
//   return mergeConfig(config, {
//     resolve: {
//       alias: {
//         '@': '/src',
//       },
//     },
//     server: {
//       allowedHosts: ['admin.gamevenues.com'], // ✅ Allow this host
//     },
//   });
// };


import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    allowedHosts: ['usadmin.gamevenues.com'], // ✅ Fix for host restriction
    host: true, // 👈 allows external access (important if using a custom domain or reverse proxy)
  },
});
