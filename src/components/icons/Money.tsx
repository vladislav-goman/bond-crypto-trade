import React from 'react';

export const Money: React.FC<{ fill?: string }> = ({ fill = '#3C364D' }) => {
  return (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.042 6.125L3.29199 6.125C2.82786 6.125 2.38274 6.30937 2.05456 6.63756C1.72637 6.96575 1.54199 7.41087 1.54199 7.875L1.54199 20.125C1.54199 20.5891 1.72637 21.0342 2.05456 21.3624C2.38274 21.6906 2.82786 21.875 3.29199 21.875L26.042 21.875C26.5061 21.875 26.9512 21.6906 27.2794 21.3624C27.6076 21.0342 27.792 20.5891 27.792 20.125L27.792 7.875C27.792 7.41087 27.6076 6.96575 27.2794 6.63756C26.9512 6.30937 26.5061 6.125 26.042 6.125ZM8.87012 20.125L3.29199 15.3453L3.29199 12.6547L8.87012 7.875L20.4639 7.875L26.042 12.6547L26.042 15.3453L20.4639 20.125L8.87012 20.125ZM19.042 14C19.042 14.8653 18.7854 15.7112 18.3047 16.4306C17.8239 17.1501 17.1407 17.7108 16.3412 18.042C15.5418 18.3731 14.6621 18.4597 13.8135 18.2909C12.9648 18.1221 12.1853 17.7054 11.5734 17.0936C10.9615 16.4817 10.5449 15.7022 10.3761 14.8535C10.2072 14.0049 10.2939 13.1252 10.625 12.3258C10.9562 11.5263 11.5169 10.8431 12.2364 10.3623C12.9558 9.88159 13.8017 9.625 14.667 9.625C15.8273 9.625 16.9401 10.0859 17.7606 10.9064C18.5811 11.7269 19.042 12.8397 19.042 14Z"
        fill={fill}
      />
    </svg>
  );
};
