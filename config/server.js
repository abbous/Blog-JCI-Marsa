module.exports = ({ env }) => ({
  url: env("https://enigmatic-depths-28789.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});