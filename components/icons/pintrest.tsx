import { cn } from "@/lib/utils"

export const PintrestIcon = ({
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            className={cn("h-5 w-5", className)}
        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="16" fill="#EF6F1F"/>
  <path d="M16 8C11.6 8 8 11.6 8 16C8 19.3 10 22.1 12.8 23.3C12.8 22.7 12.8 22.1 12.9 21.5C13.1 20.8 13.9 17.1 13.9 17.1C13.9 17.1 13.6 16.6 13.6 15.8C13.6 14.6 14.3 13.7 15.1 13.7C15.8 13.7 16.2 14.2 16.2 14.9C16.2 15.6 15.7 16.7 15.5 17.7C15.3 18.5 15.9 19.2 16.8 19.2C18.3 19.2 19.3 17.3 19.3 14.9C19.3 13.1 18.1 11.8 16 11.8C13.6 11.8 12.1 13.6 12.1 15.6C12.1 16.3 12.3 16.8 12.6 17.2C12.7 17.4 12.8 17.4 12.7 17.6C12.7 17.7 12.6 18.1 12.5 18.2C12.4 18.4 12.3 18.5 12.1 18.4C11 17.9 10.5 16.7 10.5 15.3C10.5 13 12.4 10.3 16.2 10.3C19.3 10.3 21.3 12.5 21.3 14.9C21.3 18 19.6 20.4 17 20.4C16.1 20.4 15.3 19.9 15 19.4C15 19.4 14.5 21.2 14.4 21.6C14.2 22.2 13.9 22.8 13.6 23.3C14.3 23.5 15.1 23.6 15.9 23.6C20.3 23.6 23.9 20 23.9 15.6C24 11.6 20.4 8 16 8Z" fill="#FFFBF2"/>
</svg>
    )
}
