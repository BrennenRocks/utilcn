import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const s3Client = new S3Client({
  region: process.env.S3_REGION,
  endpoint: process.env.S3_ENDPOINT,
  forcePathStyle: true, // Required for some S3-compatible services
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
});

type PresignedUrlInput = {
  fileName: string;
  expiresIn?: number;
  contentLength: number;
};

export async function generatePresignedUploadUrl({
  fileName,
  expiresIn = 3600,
  contentLength,
}: PresignedUrlInput) {
  if (contentLength > MAX_FILE_SIZE_BYTES) {
    throw new Error('File size exceeds maximum allowed limit');
  }

  try {
    const fileExt = fileName.split('.').pop()?.toLowerCase() ?? '';
    const uniqueId = Date.now().toString();
    const key = fileExt ? `${uniqueId}.${fileExt}` : uniqueId;
    const contentType = getContentType(fileExt);

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      ContentType: contentType,
      ContentLength: contentLength,
    });

    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn });
    const fileUrl = `${process.env.S3_PUBLIC_URL}/${key}`;

    return { uploadUrl, key, fileUrl };
  } catch (err) {
    console.error({ err }, 'Failed to generate presigned upload URL');
    throw new Error('Failed to generate upload URL');
  }
}

function getContentType(extension: string): string {
  switch (extension) {
    // Images
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'webp':
      return 'image/webp';
    case 'svg':
      return 'image/svg+xml';

    // Documents
    case 'pdf':
      return 'application/pdf';
    case 'doc':
      return 'application/msword';
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    // Other common types
    case 'json':
      return 'application/json';
    case 'txt':
      return 'text/plain';

    default:
      return 'application/octet-stream';
  }
}
