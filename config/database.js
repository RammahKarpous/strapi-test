module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'aws-eu-west-2.connect.psdb.cloud'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi-test'),
      user: env('DATABASE_USERNAME', 'awwqz7wy0aixxq1xc6jf'),
      password: env('DATABASE_PASSWORD', 'pscale_pw_zRmbz4WLRTFmmCG5ZQWV46hNExFuJXeNQLo2vLvbdnE'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
