import { mergeConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      host: true, // Allow external access (localhost, IP, etc.)
      port: 1337,
      allowedHosts: ['localhost', 'admin.gamevenues.com'], // ✅ This is the correct key
    },
  });
};
