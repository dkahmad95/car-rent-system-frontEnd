import React, { useState, ChangeEvent } from "react";

interface FileInputProps {
  id: string;
  name: string;
  label: string;
  required: boolean;
  onChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  id,
  name,
  label,
  required,
  onChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClear = () => {
    setSelectedFile(null);
    onChange(null);
  
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    onChange(file);
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-600 mb-2">
        {label}
      </label>
      <input
        type="file"
        id={id}
        name={name}
        required={required}
        onChange={handleChange}
      />
      {selectedFile && (
        <button className="text-red-500" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default FileInput;
