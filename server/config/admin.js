module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '31a77234dde7dd6d02b55af1b3bdc9ef'),
  },
});
