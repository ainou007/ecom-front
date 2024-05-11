import { isAxiosError } from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAxiosErrorHandler = (err: unknown) => {
  if (isAxiosError(err)) {
    return err.response?.data.message || err.message;
  } else {
    return 'An Unexpected error !';
  }
};

export const isString = (val: unknown): val is string => {
  // TypeScript predicate technic
  return typeof val === 'string';
};
