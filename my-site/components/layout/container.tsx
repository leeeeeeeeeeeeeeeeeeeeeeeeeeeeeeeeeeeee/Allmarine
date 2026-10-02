import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

const sizes = {
  default: "max-w-6xl",
  narrow: "max-w-5xl",
  wide: "max-w-7xl",
};

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
