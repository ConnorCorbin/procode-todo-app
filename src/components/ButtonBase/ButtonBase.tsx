import { ComponentPropsWithRef, forwardRef, PropsWithChildren } from "react";

export const ButtonBase = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(function ButtonBase({ children, type = "button", ...props }, ref) {
  return (
    <button ref={ref} type={type} {...props}>
      {children}
    </button>
  );
});

interface ButtonProps extends ComponentPropsWithRef<"button"> {}
