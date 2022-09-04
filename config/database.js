module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'sql496.main-hosting.eu'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u985382793_strapi'),
      user: env('DATABASE_USERNAME', 'u985382793_strapiv4'),
      password: env('DATABASE_PASSWORD', '8k@oxh/#Z'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
