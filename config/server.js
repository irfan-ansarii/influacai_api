module.exports = ({ env }) => ({
  host: env("APP_HOST", "0.0.0.0"),
  port: env.int("APP_PORT", 4200),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
