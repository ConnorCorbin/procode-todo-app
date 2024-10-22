import {
  forwardRef,
  type PropsWithChildren,
  type ComponentPropsWithRef,
} from "react";

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

export interface ButtonProps extends ComponentPropsWithRef<"button"> {}
