import { mergeConfig } from 'vite';

/**
 * @param {import('vite').UserConfig} config
 * @returns {import('vite').UserConfig}
 */
export default (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      host: true, // Equivalent to 0.0.0.0
      port: 1337, // Your preferred port
      allowedHosts: ['admin.gamevenues.com'], // ✅ This fixes the host error
    },
  });
};
