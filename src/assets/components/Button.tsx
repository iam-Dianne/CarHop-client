import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger";

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-primary-dark text-white rounded-md",
  secondary: "border border-gray-300 text-gray-700 rounded-md",
  tertiary: "border-b-2 border-gray-300 text-gray-700",
  danger: "bg-red-600 hover:bg-red-700 text-white rounded-md",
};

const Button = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} ${className} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      } px-4 py-2 font-semibold text-sm`}
    >
      {label}
    </button>
  );
};

export default Button;
