import { cn } from '@/lib/utils';

export const Location = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn('h-4 w-4', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4.46447 3.51719C2.51184 5.5401 2.51184 8.81989 4.46447 10.8428L7.16685 13.6425C7.62699 14.1192 8.37301 14.1192 8.83315 13.6425L11.5355 10.8428C13.4882 8.81989 13.4882 5.5401 11.5355 3.51719M4.46447 3.51719C6.41709 1.49427 9.58291 1.49427 11.5355 3.51719M4.46447 3.51719L-nan -nanC-nan -nan -nan -nan -nan -nanL-nan -nanC-nan -nan -nan -nan -nan -nanL4.46447 3.51719ZM11.5355 3.51719L-nan -nanC-nan -nan -nan -nan -nan -nanL-nan -nanC-nan -nan -nan -nan -nan -nanL11.5355 3.51719ZM9.71603 7.18013C9.71603 8.16172 8.94794 8.95746 8.00046 8.95746C7.05297 8.95746 6.28489 8.16172 6.28489 7.18013C6.28489 6.19854 7.05297 5.4028 8.00046 5.4028C8.94794 5.4028 9.71603 6.19854 9.71603 7.18013Z"
        stroke="#EF6F1F"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
