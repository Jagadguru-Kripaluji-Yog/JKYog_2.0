import { cn } from "@/lib/utils";

export const ArrowRight = ({
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            className={cn("h-5 w-5", className)}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M3.3335 10H16.6668M16.6668 10L11.6668 5M16.6668 10L11.6668 15"
                stroke="#291900"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
