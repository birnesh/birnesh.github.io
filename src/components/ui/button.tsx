import { mergeClasses } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    className?: string,
    children: ReactNode
}
const SimpleButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className = "", ...props }, ref) => {
        return (
            <button
                className={
                    mergeClasses(
                        "px-4 py-2 rounded-xl inline-flex items-center justify-center text-sm font-semibold leading-6 bg-gray-900 text-gray-50  transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800",
                        className
                    )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)


export default SimpleButton;