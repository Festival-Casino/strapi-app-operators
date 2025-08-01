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
  server: {
    host: true, // Allow external access (0.0.0.0)
    port: 1337, // Or your preferred port
    allowedHosts: ['admin.gamevenues.com'], // ✅ Fix the error
  },
});

