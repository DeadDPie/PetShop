type VariantType = "FILL" | "OUTLINE";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
}

export const Button = ({
  variant = "FILL",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${variant === "FILL" && "bg-primary text-white"} ${
        variant === "OUTLINE" && "bg-white border-primary text-primary"
      } rounded-[12px] px-4 py-[14px] font-bold font-comfortaa ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
