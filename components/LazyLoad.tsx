// components/LazyLoad.tsx
"use client"
import React from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad'

interface LazyLoadProps {
  children: React.ReactNode;
  className?: string;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({ children, className = '' }) => {
  const { ref, isVisible } = useLazyLoad();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};