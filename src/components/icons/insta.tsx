import { cn } from '@/src/lib/utils';

export const InstaIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
        d="M16 9.44578C18.1205 9.44578 18.4096 9.44578 19.2771 9.44578C20.0482 9.44578 20.4337 9.63855 20.7229 9.73494C21.1084 9.92771 21.3976 10.0241 21.6867 10.3133C21.9759 10.6024 22.1687 10.8916 22.2651 11.2771C22.3614 11.5663 22.4578 11.9518 22.5542 12.7229C22.5542 13.5904 22.5542 13.7831 22.5542 16C22.5542 18.2169 22.5542 18.4096 22.5542 19.2771C22.5542 20.0482 22.3614 20.4337 22.2651 20.7229C22.0723 21.1084 21.9759 21.3976 21.6867 21.6867C21.3976 21.9759 21.1084 22.1687 20.7229 22.2651C20.4337 22.3614 20.0482 22.4578 19.2771 22.5542C18.4096 22.5542 18.2169 22.5542 16 22.5542C13.7831 22.5542 13.5904 22.5542 12.7229 22.5542C11.9518 22.5542 11.5663 22.3614 11.2771 22.2651C10.8916 22.0723 10.6024 21.9759 10.3133 21.6867C10.0241 21.3976 9.83133 21.1084 9.73494 20.7229C9.63855 20.4337 9.54217 20.0482 9.44578 19.2771C9.44578 18.4096 9.44578 18.2169 9.44578 16C9.44578 13.7831 9.44578 13.5904 9.44578 12.7229C9.44578 11.9518 9.63855 11.5663 9.73494 11.2771C9.92771 10.8916 10.0241 10.6024 10.3133 10.3133C10.6024 10.0241 10.8916 9.83133 11.2771 9.73494C11.5663 9.63855 11.9518 9.54217 12.7229 9.44578C13.5904 9.44578 13.8795 9.44578 16 9.44578ZM16 8C13.7831 8 13.5904 8 12.7229 8C11.8554 8 11.2771 8.19277 10.7952 8.38554C10.3133 8.57831 9.83133 8.86747 9.3494 9.3494C8.86747 9.83133 8.6747 10.2169 8.38554 10.7952C8.19277 11.2771 8.09639 11.8554 8 12.7229C8 13.5904 8 13.8795 8 16C8 18.2169 8 18.4096 8 19.2771C8 20.1446 8.19277 20.7229 8.38554 21.2048C8.57831 21.6867 8.86747 22.1687 9.3494 22.6506C9.83133 23.1325 10.2169 23.3253 10.7952 23.6145C11.2771 23.8072 11.8554 23.9036 12.7229 24C13.5904 24 13.8795 24 16 24C18.1205 24 18.4096 24 19.2771 24C20.1446 24 20.7229 23.8072 21.2048 23.6145C21.6867 23.4217 22.1687 23.1325 22.6506 22.6506C23.1325 22.1687 23.3253 21.7831 23.6145 21.2048C23.8072 20.7229 23.9036 20.1446 24 19.2771C24 18.4096 24 18.1205 24 16C24 13.8795 24 13.5904 24 12.7229C24 11.8554 23.8072 11.2771 23.6145 10.7952C23.4217 10.3133 23.1325 9.83133 22.6506 9.3494C22.1687 8.86747 21.7831 8.6747 21.2048 8.38554C20.7229 8.19277 20.1446 8.09639 19.2771 8C18.4096 8 18.2169 8 16 8Z"
        fill="#FFFBF2"
      />
      <path
        d="M16 11.8554C13.6867 11.8554 11.8554 13.6867 11.8554 16C11.8554 18.3133 13.6867 20.1446 16 20.1446C18.3133 20.1446 20.1446 18.3133 20.1446 16C20.1446 13.6867 18.3133 11.8554 16 11.8554ZM16 18.6988C14.5542 18.6988 13.3012 17.5422 13.3012 16C13.3012 14.5542 14.4578 13.3012 16 13.3012C17.4458 13.3012 18.6988 14.4578 18.6988 16C18.6988 17.4458 17.4458 18.6988 16 18.6988Z"
        fill="#FFFBF2"
      />
      <path
        d="M20.241 12.7229C20.7733 12.7229 21.2048 12.2914 21.2048 11.759C21.2048 11.2267 20.7733 10.7952 20.241 10.7952C19.7086 10.7952 19.2771 11.2267 19.2771 11.759C19.2771 12.2914 19.7086 12.7229 20.241 12.7229Z"
        fill="#FFFBF2"
      />
    </svg>
  );
};