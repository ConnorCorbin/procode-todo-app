import { forwardRef, type PropsWithChildren } from "react";

export const FormField = forwardRef<
  HTMLDivElement,
  PropsWithChildren<FormFieldProps>
>(function FormField({ children }, ref) {
  return (
    <div ref={ref} className="space-y-0.5">
      {children}
    </div>
  );
});

export interface FormFieldProps {}
