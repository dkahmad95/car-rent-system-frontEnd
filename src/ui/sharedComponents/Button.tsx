interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  type,
  children,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
