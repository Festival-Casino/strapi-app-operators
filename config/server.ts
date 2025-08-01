// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://admin.gamevenues.com'), // ✅ add this
  app: {
    keys: env.array('APP_KEYS'),
  },
  allowedHosts: ['admin.gamevenues.com'], // ✅ add this
});

