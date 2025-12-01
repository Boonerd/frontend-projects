import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" }
>(({ className, variant = "default", children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold transition-all disabled:opacity-50",
        variant === "default" && "bg-indigo-600 text-white hover:bg-indigo-700 px-10 py-5 text-xl",
        variant === "outline" && "border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-5 text-xl",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";