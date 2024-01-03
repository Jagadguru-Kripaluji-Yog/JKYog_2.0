import { cn } from '@/src/utils/tailwind';

export const CalendarInverted = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.31136 2C5.65654 2 5.93636 2.27982 5.93636 2.625V2.89605H10.0579V2.625C10.0579 2.27982 10.3377 2 10.6829 2C11.0281 2 11.3079 2.27982 11.3079 2.625V2.89605H11.5774C12.9115 2.89605 13.992 3.97848 13.992 5.31242V6.5079V11.5863C13.992 12.9202 12.9115 14.0027 11.5774 14.0027H4.41458C3.08046 14.0027 2 12.9202 2 11.5863V6.5079V5.31241C2 3.97848 3.08046 2.89605 4.41458 2.89605H4.68636V2.625C4.68636 2.27982 4.96618 2 5.31136 2ZM4.68636 4.14605H4.41458C3.77199 4.14605 3.25 4.66766 3.25 5.31241V5.8829H12.742V5.31242C12.742 4.66766 12.22 4.14605 11.5774 4.14605H11.3079V4.41711C11.3079 4.76229 11.0281 5.04211 10.6829 5.04211C10.3377 5.04211 10.0579 4.76229 10.0579 4.41711V4.14605H5.93636V4.41711C5.93636 4.76229 5.65654 5.04211 5.31136 5.04211C4.96618 5.04211 4.68636 4.76229 4.68636 4.41711V4.14605ZM12.742 7.1329H3.25V11.5863C3.25 12.231 3.77199 12.7527 4.41458 12.7527H11.5774C12.22 12.7527 12.742 12.231 12.742 11.5863V7.1329Z"
        fill="#FFF"
      />
    </svg>
  );
};
