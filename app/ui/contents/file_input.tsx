import React, { ChangeEvent } from 'react';

interface FileInputProps {
  name: string;
  onChange: (file: File) => void;
}

export default function FileInput({ name, onChange }: FileInputProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      onChange(selectedFile);
    }
  };

  return <input type="file" name={name} onChange={handleFileChange} />;
}
