import { type InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-body-base font-semibold color-foreground">{label}</label>}
      <input
        ref={ref}
        className={twMerge(
          "px-4 py-2 border border-slate-400 rounded-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200",
          className
        )}
        {...props}
      />
    </div>
  );
});

export default Input;
