import React, { useEffect } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

export const useAnimationObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animationClass = entry.target.getAttribute('data-animate')!;
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains(animationClass)
        ) {
          const animationClass = entry.target.getAttribute('data-animate');
          entry.target.classList.add(`animate__animated`);
          entry.target.classList.add(`${animationClass}`);
          return;
        }
      });
    }, options);

    Array.from(
      document.querySelectorAll<HTMLElement>('[data-animate]')
    ).forEach((element) => {
      element.style.opacity = '0';
      observer.observe(element);
    });
  }, []);
};
