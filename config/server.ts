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
  url: env('PUBLIC_URL', 'http://localhost:1337'), // ✅ Add this
  app: {
    keys: env.array('APP_KEYS'),
  },
  allowedHosts: ['admin.gamevenues.com'], // ✅ Add this too
});

