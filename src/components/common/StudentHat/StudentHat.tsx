import React from 'react';
import classes from './StudentHat.module.scss';

export const StudentHat: React.FC<{
  className?: string;
}> = () => {
  return (
    <div className={classes.student}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_78_235)">
          <path
            d="M39.218 10.0277L20.3899 3.38461C20.1376 3.29555 19.8624 3.29555 19.6101 3.38461L0.782032 10.0277C0.313907 10.1928 0.000625936 10.635 9.36486e-07 11.1314C-0.000624063 11.6278 0.311641 12.0707 0.779376 12.237L19.6075 18.9305C19.7344 18.9756 19.8673 18.9982 20 18.9982C20.1328 18.9982 20.2655 18.9756 20.3925 18.9305L39.2206 12.237C39.6883 12.0707 40.0005 11.6278 40 11.1314C39.9994 10.635 39.6861 10.1928 39.218 10.0277Z"
            fill="#641AAD"
          />
          <path
            d="M37.1855 25.6698V15.448L34.8418 16.2812V25.6698C34.1359 26.0762 33.6602 26.8375 33.6602 27.7105C33.6602 28.5835 34.1359 29.3449 34.8418 29.7512V35.5103C34.8418 36.1575 35.3665 36.6822 36.0137 36.6822C36.6609 36.6822 37.1855 36.1575 37.1855 35.5103V29.7513C37.8915 29.3451 38.3672 28.5836 38.3672 27.7106C38.3672 26.8376 37.8916 26.0762 37.1855 25.6698Z"
            fill="#641AAD"
          />
          <path
            d="M20 21.342C19.5977 21.342 19.2015 21.2736 18.8224 21.1388L8.23779 17.3759V22.5328C8.23779 23.7945 9.55396 24.8614 12.1497 25.7039C14.4123 26.4383 17.2003 26.8427 20 26.8427C22.7997 26.8427 25.5876 26.4383 27.8502 25.7039C30.446 24.8614 31.7622 23.7945 31.7622 22.5328V17.3759L21.1776 21.1388C20.7984 21.2736 20.4022 21.342 20 21.342Z"
            fill="#641AAD"
          />
        </g>
        <defs>
          <clipPath id="clip0_78_235">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};