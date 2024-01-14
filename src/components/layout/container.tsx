import { mergeClasses } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className = "", ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          "w-full bg-gray py-16 md:py-20 2xl:py-24",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = "Container";
export default Container;
