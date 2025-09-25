import { useCallback } from 'react';

type UploadArgs = {
  file: File;
  onProgress?: (percent: number) => void;
  onSuccess?: (fileUrl: string) => void;
  onError?: (error: Error) => void;
};

export function useUploadFile() {
  const uploadFile = useCallback(
    async ({ file, onProgress, onSuccess, onError }: UploadArgs) => {
      try {
        const presignRes = await fetch('http://localhost:8080/uploadFile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName: file.name,
            contentLength: file.size,
          }),
        });

        if (!presignRes.ok) {
          throw new Error('Failed to get presigned URL');
        }
        const presign = await presignRes.json();

        await new Promise<void>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('PUT', presign.uploadUrl);

          xhr.setRequestHeader('Content-Type', file.type);

          xhr.upload.onprogress = (evt) => {
            if (evt.lengthComputable && onProgress) {
              const PERCENTAGE_MULTIPLIER = 100;
              const percent = Math.round(
                (evt.loaded * PERCENTAGE_MULTIPLIER) / evt.total,
              );
              onProgress(percent);
            }
          };

          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve();
            } else {
              reject(new Error('Upload failed'));
            }
          };

          xhr.onerror = () => reject(new Error('Upload failed'));
          xhr.send(file);
        });

        const fileUrl = presign.fileUrl as string;
        onSuccess?.(fileUrl);
        return fileUrl;
      } catch (error) {
        const uploadError =
          error instanceof Error ? error : new Error('Upload failed');
        onError?.(uploadError);
        throw uploadError;
      }
    },
    [],
  );

  return { uploadFile };
}
