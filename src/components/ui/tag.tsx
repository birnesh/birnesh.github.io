import { mergeClasses } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import Typography from "@/components/ui/typography";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  className?: string;
}
const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ label, className = "", ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          "flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1",
          className
        )}
        ref={ref}
        {...props}
      >
        <Typography variant="body3" className="font-medium">
          {label}
        </Typography>
      </div>
    );
  }
);


export default Tag;