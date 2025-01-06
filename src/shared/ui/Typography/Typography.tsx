type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// h1 - title
// h2 - modal
// h3 -  modal mobile and input
// h4 - title mobile, input mobile

export const Typography = ({
  variant = "h1",
  children,
  className,
  ...props
}: {
  variant?: TypographyType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>) => (
  <>
    {variant === "h1" && (
      <p
        className={`font-semibold text-[32px] font-comfortaa ${className}`}
        {...props}
      >
        {children}
      </p>
    )}
    {variant === "h2" && (
      <p
        className={`font-semibold text-[26px] font-comfortaa ${className}`}
        {...props}
      >
        {children}
      </p>
    )}
    {variant === "h3" && (
      <p
        className={`font-semibold text-xl font-comfortaa ${className}`}
        {...props}
      >
        {children}
      </p>
    )}
    {variant === "h4" && (
      <p
        className={`font-semibold font-comfortaa text-base ${className}`}
        {...props}
      >
        {children}
      </p>
    )}
  </>
);
