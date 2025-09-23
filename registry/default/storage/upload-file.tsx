'use client';

import { type ChangeEvent, useState } from 'react';
import { useUploadFile } from '@/registry/default/storage/use-upload-file';

export function UploadFile() {
  const [progress, setProgress] = useState(0);
  const uploadFile = useUploadFile();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    uploadFile.mutate(
      { file, onProgress: (p: number) => setProgress(p) },
      {
        onSuccess: (url: string) => {
          console.log('Uploaded to:', url);
        },
        onError: (err: Error) => {
          console.error(`Upload failed: ${(err as Error).message}`);
        },
        onSettled: () => setProgress(0),
      },
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/80"
      />

      {uploadFile.isPending && (
        <div className="mt-4 flex items-center gap-2">
          <div className="w-full h-2 bg-secondary rounded-full">
            <div
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
      )}
    </div>
  );
}
