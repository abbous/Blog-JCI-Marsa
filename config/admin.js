module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a086f952a04912f516878e091a3b9fd1'),
  },
});
