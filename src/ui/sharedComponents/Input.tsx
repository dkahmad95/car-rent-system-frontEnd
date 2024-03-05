interface InputProps {
    id: string;
    name: string
    label?: string;
    required: boolean
    autoComplete : string;
    value?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input: React.FC<InputProps> = ({ id, label, placeholder,name,autoComplete, value , className,required,type , onChange }) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-gray-600 mb-2">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          autoComplete={autoComplete}
          value={value}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border-b  border-gray-500  focus:outline-none focus:border-gray-400 ${className}`}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default Input;