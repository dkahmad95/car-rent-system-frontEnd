interface RadioProps {
  id: string;
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  required: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
  id,
  name,
  label,
  options,
  required,
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
      <div className="flex items-center">
        {options.map((option) => (
          <div key={option.value} className="flex items-center  m-4">
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              required={required}
              className={`mr-2 ${className}`}
              onChange={onChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
