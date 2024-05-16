module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
        },
        region: env('AWS_REGION'),
        baseUrl: `https://s3.${env('AWS_REGION')}.amazonaws.com/${env('AWS_BUCKET')}`, // This line sets the custom url format
        params: {
          ACL: env('AWS_ACL') || 'public-read',
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES') || 15 * 60,
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  }
});