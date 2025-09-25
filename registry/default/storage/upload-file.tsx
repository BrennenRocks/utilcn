'use client';

import { type ChangeEvent, useState } from 'react';
import { useUploadFile } from '@/registry/default/storage/use-upload-file';

export function UploadFile() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { uploadFile } = useUploadFile();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    setIsUploading(true);
    uploadFile({
      file,
      onProgress: (p: number) => setProgress(p),
      onSuccess: (url: string) => {
        console.log('Uploaded to:', url);
        setIsUploading(false);
        setProgress(0);
      },
      onError: (err: Error) => {
        console.error(`Upload failed: ${err.message}`);
        setIsUploading(false);
        setProgress(0);
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        className="file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:font-semibold file:text-secondary-foreground file:text-sm hover:file:bg-secondary/80"
        onChange={handleFileChange}
        type="file"
      />

      {isUploading && (
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-full rounded-full bg-secondary">
            <div
              className="h-2 rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-muted-foreground text-sm">{progress}%</span>
        </div>
      )}
    </div>
  );
}
