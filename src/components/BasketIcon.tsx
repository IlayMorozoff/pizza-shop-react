import { FC } from 'react';

const BasketIcon: FC<{ size: number; color: string }> = ({ size, color }) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 50 50">
      <path
        d="M16.6667 47.9166C18.9679 47.9166 20.8333 46.0512 20.8333 43.75C20.8333 41.4488 18.9679 39.5833 16.6667 39.5833C14.3655 39.5833 12.5 41.4488 12.5 43.75C12.5 46.0512 14.3655 47.9166 16.6667 47.9166Z"
        stroke={color}
        strokeWidth="4.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.6667 47.9166C43.9679 47.9166 45.8333 46.0512 45.8333 43.75C45.8333 41.4488 43.9679 39.5833 41.6667 39.5833C39.3655 39.5833 37.5 41.4488 37.5 43.75C37.5 46.0512 39.3655 47.9166 41.6667 47.9166Z"
        stroke={color}
        strokeWidth="4.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8124 12.5H47.9166L44.4166 29.9791C44.2261 30.9383 43.7043 31.7999 42.9425 32.4131C42.1808 33.0263 41.2276 33.352 40.2499 33.3333H18.2291C17.2118 33.3419 16.2264 32.9781 15.4589 32.3103C14.6913 31.6425 14.1946 30.717 14.0624 29.7083L10.8958 5.70831C10.7644 4.70672 10.2737 3.78694 9.51492 3.12012C8.75612 2.4533 7.78091 2.08484 6.77075 2.08331H2.08325"
        stroke={color}
        strokeWidth="4.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BasketIcon;
