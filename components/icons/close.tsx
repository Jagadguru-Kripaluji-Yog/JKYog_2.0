import { cn } from "@/lib/utils"

export const Close = ({
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
        d="M16.25 3.75L3.75 16.25M16.25 16.25L3.75 3.75"
        stroke="#B7A68C"
        stroke-width="1.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
