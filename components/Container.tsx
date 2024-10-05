import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const Container = ({ children, className, backgroundImage }: ContainerProps) => {
  const containerStyle: React.CSSProperties = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div
      className={`container mx-auto xl:px-0 bg-cover bg-center bg-no-repeat ${className || ''}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

export default Container;