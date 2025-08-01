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
    host: true, // Accept all IPs and external hosts
    port: 1337,
    allowedHosts: ['admin.gamevenues.com'], // ✅ Add your domain here
    strictPort: true,
  },
});
