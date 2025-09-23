import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import { getS3Client } from '@/registry/default/storage/s3-client';

export async function generatePresignedDownloadUrl(
  key: string,
  expiresIn = 3600,
) {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
    });

    const url = await getSignedUrl(getS3Client(), command, { expiresIn });
    return url;
  } catch (err) {
    console.error({ err }, 'Failed to generate download URL');
    throw new Error('Failed to generate download URL');
  }
}
