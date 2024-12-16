'use client';

import { useEffect, useState } from 'react';

import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tailwind: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tailwind, className));
}

const focusRing = tv({
  variants: {
    isFocused: { true: 'ring-4 ring-ring/20 outline-hidden' },
    isFocusVisible: { true: 'ring-4 ring-ring/20 outline-hidden' },
    isInvalid: { true: 'ring-4 ring-danger/20' }
  }
});

const focusStyles = tv({
  extend: focusRing,
  variants: {
    isFocused: { true: 'border-ring/70 forced-colors:border-[Highlight]' },
    isInvalid: { true: 'border-danger/70 forced-colors:border-[Mark]' }
  }
});

const focusButtonStyles = tv({
  base: 'outline outline-ring forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2'
    }
  }
});

const useMediaQuery = (query: string) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
};

export { composeTailwindRenderProps, focusButtonStyles, focusRing, focusStyles, useMediaQuery };
