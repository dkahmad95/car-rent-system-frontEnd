import React from "react";

interface SelectOption {
  name: string;
  value: number | string;
}

interface SelectProps {
  id: string;
  name: string;
  label?: string;
  required: boolean;
  value?: string;
  options: SelectOption[];
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  name,
  required,
  options,
  value,
  className,
  onChange,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-600 mb-2">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        required={required}
        className={`w-full  border rounded-md focus:outline-none focus:border-gray-400 ${className}`}
        onChange={onChange}
      >
        {options.map((option) => (
          <option className="" key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
