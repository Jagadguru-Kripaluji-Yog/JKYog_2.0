import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function theme() {
  return resolveConfig(tailwindConfig).theme;
}
