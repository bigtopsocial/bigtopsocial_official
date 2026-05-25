import type { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={["mx-auto w-[90%] max-w-[1440px]", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
