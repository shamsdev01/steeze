"use client"
// import React from 'react';
import useInView from '@/hooks/useInView';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;