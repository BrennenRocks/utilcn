import { S3Client } from '@aws-sdk/client-s3';

let s3Client: S3Client | null = null;

export const getS3Client = (): S3Client => {
  if (s3Client) {
    return s3Client;
  }

  if (
    !process.env.S3_REGION ||
    !process.env.S3_ENDPOINT ||
    !process.env.S3_ACCESS_KEY ||
    !process.env.S3_SECRET_KEY
  ) {
    throw new Error('Missing S3 environment variables');
  }

  s3Client = new S3Client({
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    forcePathStyle: true, // Required for some S3-compatible services
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    },
  });

  return s3Client;
};
