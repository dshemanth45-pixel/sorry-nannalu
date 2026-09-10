import * as React from "react";
import { cn } from "../../lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[140px] sm:min-h-[150px] w-full resize-none rounded-2xl border border-wine/15 bg-white/70 px-4 py-3.5 sm:px-5 sm:py-4 text-base sm:text-sm text-ink placeholder:text-mutedRose outline-none transition focus:border-wine/40 focus:ring-4 focus:ring-blush/30",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
