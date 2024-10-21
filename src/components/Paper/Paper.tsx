import { forwardRef, type PropsWithChildren } from "react";

export const Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper(
  { children },
  ref
) {
  return (
    <div ref={ref} className="overflow-hidden rounded-lg bg-white shadow">
      {children}
    </div>
  );
});

export interface PaperProps extends PropsWithChildren<{}> {}
