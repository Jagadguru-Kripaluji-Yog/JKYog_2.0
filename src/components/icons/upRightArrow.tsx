import { cn } from "@/lib/utils";

export const UpRightArrow = ({
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            className={cn("h-6 w-6", className)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M17.3027 6.91052L6.7032 17.51M8.82381 6.92254L17.3041 6.89496L17.2766 15.3753"
                stroke="#291900"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
