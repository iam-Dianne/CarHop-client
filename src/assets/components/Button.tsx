type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
};

type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-dark hover:shadow-lg text-text bg-linear-to-r from-primary to-primray-light",
  secondary: "bg-text hover:bg-text-muted hover:shadow-lg text-primary",
  tertiary: "border-primary hover:bg-text-muted hover:shadow-lg text-primary",
  danger: "bg-red-600 hover:bg-red-700 hover:shadow-lg",
};

const Button = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded font-semibold transition duration-200 text-sm cursor-pointer";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const style = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${style} ${disabledStyles} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
