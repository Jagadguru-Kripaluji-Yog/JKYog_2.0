import { cn } from "@/lib/utils";

export const ArrowLeft = ({
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            className={cn("h-5 w-5", className)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
        >
            <path
                d="M14.6666 6L1.33325 6M1.33325 6L6.33325 11M1.33325 6L6.33325 1"
                stroke="#291900"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
