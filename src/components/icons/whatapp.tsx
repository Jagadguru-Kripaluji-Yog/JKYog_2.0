import { cn } from '@/src/lib/utils';

export const WhatAppIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn('h-5 w-5', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" rx="16" fill="#EF6F1F" />
      <path
        d="M21.0031 7.63668C17.9539 7.05437 14.7874 7.05437 11.7382 7.63668C10.3895 7.92784 8.68901 9.5583 8.39581 10.8394C7.86806 13.3433 7.86806 15.9055 8.39581 18.4094C8.74764 19.6905 10.4482 21.3209 11.7382 21.6121C11.7969 21.6121 11.8555 21.6703 11.8555 21.7285V25.3971C11.8555 25.5718 12.0901 25.6882 12.2073 25.5135L13.9665 23.7084C13.9665 23.7084 15.3738 22.2526 15.6084 22.0197C15.6084 22.0197 15.667 21.9615 15.7257 21.9615C17.4848 22.0197 19.3026 21.845 21.0618 21.5538C22.4105 21.2627 24.111 19.6322 24.4042 18.3511C24.9319 15.8472 24.9319 13.2851 24.4042 10.7811C24.0524 9.5583 22.3518 7.92784 21.0031 7.63668ZM21.0618 18.5841C20.7686 19.1664 20.4168 19.6322 19.8304 19.9234C19.6545 19.9816 19.4785 20.0398 19.3026 20.0981C19.0681 20.0398 18.8921 19.9816 18.7162 19.9234C16.8398 19.1664 15.0806 18.1182 13.6733 16.6042C12.911 15.7308 12.266 14.7408 11.7382 13.6927C11.5037 13.1686 11.2691 12.7028 11.0932 12.1787C10.9173 11.7128 11.2105 11.247 11.5037 10.8976C11.7969 10.5482 12.1487 10.3153 12.5592 10.1406C12.8524 9.96591 13.1456 10.0824 13.3801 10.3153C13.8492 10.8976 14.3183 11.4799 14.6702 12.1205C14.9047 12.5281 14.8461 12.9939 14.4356 13.2851C14.3183 13.3433 14.2597 13.4015 14.1424 13.518C14.0838 13.5762 13.9665 13.6345 13.9079 13.7509C13.7906 13.9256 13.7906 14.1003 13.8492 14.275C14.3183 15.6143 15.1979 16.6625 16.5466 17.2448C16.7812 17.3612 16.9571 17.4195 17.2503 17.4195C17.6607 17.3612 17.8366 16.8954 18.1298 16.6625C18.423 16.4295 18.7749 16.4295 19.1267 16.6042C19.4199 16.7789 19.7131 17.0118 20.0649 17.2448C20.3581 17.4777 20.6513 17.6524 20.9445 17.8853C21.1204 18.0018 21.1791 18.2929 21.0618 18.5841ZM18.599 14.2168C18.4817 14.2168 18.5403 14.2168 18.599 14.2168C18.3644 14.2168 18.3058 14.1003 18.2471 13.9256C18.2471 13.8091 18.2471 13.6345 18.1885 13.518C18.1298 13.2851 18.0126 13.0521 17.778 12.8775C17.6607 12.8192 17.5435 12.761 17.4262 12.7028C17.2503 12.6445 17.133 12.6445 16.9571 12.6445C16.7812 12.5863 16.7225 12.4698 16.7225 12.2951C16.7225 12.1787 16.8984 12.0622 17.0157 12.0622C17.9539 12.1205 18.6576 12.6445 18.7749 13.7509C18.7749 13.8091 18.7749 13.9256 18.7749 13.9838C18.7749 14.1003 18.7162 14.2168 18.599 14.2168ZM18.0126 11.6546C17.7194 11.5381 17.4262 11.4217 17.0743 11.3635C16.9571 11.3635 16.7812 11.3052 16.6639 11.3052C16.488 11.3052 16.3707 11.1888 16.4293 11.0141C16.4293 10.8394 16.5466 10.7229 16.7225 10.7811C17.3089 10.8394 17.8367 10.9558 18.3644 11.1888C19.4199 11.7128 20.0063 12.5863 20.1822 13.7509C20.1822 13.8091 20.1822 13.8674 20.1822 13.9256C20.1822 14.0421 20.1822 14.1585 20.1822 14.3332C20.1822 14.3915 20.1822 14.4497 20.1822 14.5079C20.1236 14.7408 19.7131 14.7991 19.6545 14.5079C19.6545 14.4497 19.5958 14.3332 19.5958 14.275C19.5958 13.7509 19.4785 13.2268 19.244 12.761C18.8921 12.2369 18.4817 11.8875 18.0126 11.6546ZM21.1791 15.1485C21.0031 15.1485 20.8859 14.9738 20.8859 14.7991C20.8859 14.4497 20.8272 14.1003 20.7686 13.7509C20.534 11.8875 19.0094 10.3735 17.1916 10.0824C16.8984 10.0241 16.6052 10.0241 16.3707 9.96591C16.1948 9.96591 15.9602 9.96591 15.9016 9.73299C15.8429 9.5583 16.0188 9.38361 16.1948 9.38361C16.2534 9.38361 16.312 9.38361 16.312 9.38361C16.4293 9.38361 18.7162 9.44184 16.312 9.38361C18.7749 9.44184 20.8272 11.0723 21.2377 13.518C21.2963 13.9256 21.355 14.3332 21.355 14.7991C21.4723 14.9738 21.355 15.1485 21.1791 15.1485Z"
        fill="#FFFBF2"
      />
    </svg>
  );
};
