import { cn } from '@/src/utils/tailwind';

export const YoutubeIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={cn('h-5 w-5 group', className)}
    >
      <rect width="32" height="32" rx="16" fill="#EF6F1F" className="group-hover:fill-button-primary/[.8]" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.01019 21.6455C8.69638 21.5526 8.41005 21.3874 8.17536 21.1639C7.94067 20.9403 7.76452 20.665 7.66175 20.361C7.07453 18.7899 6.90054 12.2295 8.03148 10.9345C8.40788 10.5132 8.93931 10.2538 9.51041 10.2126C12.5444 9.89414 21.9182 9.93661 22.9947 10.3188C23.2976 10.4147 23.5742 10.5762 23.8039 10.7913C24.0337 11.0064 24.2106 11.2695 24.3214 11.5608C24.963 13.1849 24.9848 19.0871 24.2344 20.6476C24.0354 21.0538 23.7022 21.3828 23.2884 21.5818C22.1574 22.1338 10.5109 22.1231 9.01019 21.6455ZM13.8276 18.567L19.2648 15.807L13.8276 13.0257V18.567Z"
        fill="#FFFBF2"
      />
    </svg>
  );
};
