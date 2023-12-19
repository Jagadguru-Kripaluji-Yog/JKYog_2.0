import { cn } from '@/src/utils/tailwind';

export const FacebookIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn('h-5 w-5 group', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" rx="16" fill="#EF6F1F" className="group-hover:fill-button-primary/[.8]" />
      <path
        d="M17.3254 16.6919H20.3031L20.7706 13.6485H17.3248V11.9851C17.3248 10.7208 17.7354 9.59974 18.9108 9.59974H20.7997V6.94384C20.4678 6.89875 19.7659 6.80005 18.4397 6.80005C15.6703 6.80005 14.0466 8.27149 14.0466 11.6238V13.6485H11.1997V16.6919H14.0466V25.0569C14.6105 25.1422 15.1815 25.2 15.7678 25.2C16.2977 25.2 16.8148 25.1513 17.3254 25.0818V16.6919Z"
        fill="#FFFBF2"
      />
    </svg>
  );
};
