import { useMutation } from '@tanstack/react-query';

type UploadArgs = {
  file: File;
  onProgress?: (percent: number) => void;
};

export function useUploadFile() {
  return useMutation({
    mutationFn: async ({ file, onProgress }: UploadArgs) => {
      const presignRes = await fetch('/api/uploads/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: file.name,
          contentLength: file.size,
        }),
      });

      if (!presignRes.ok) throw new Error('Failed to get presigned URL');
      const presign = await presignRes.json();

      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', presign.uploadUrl);

        xhr.setRequestHeader('Content-Type', file.type);

        xhr.upload.onprogress = (evt) => {
          if (evt.lengthComputable && onProgress) {
            const percent = Math.round((evt.loaded * 100) / evt.total);
            onProgress(percent);
          }
        };

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) resolve();
          else reject(new Error('Upload failed'));
        };

        xhr.onerror = () => reject(new Error('Upload failed'));
        xhr.send(file);
      });

      return presign.fileUrl as string;
    },
  });
}
