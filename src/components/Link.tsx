import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const baseClasses = 'text-gray-800 hover:text-amber-600 transition-colors';
  
  return (
    <a href={href} className={`${baseClasses} ${className}`}>
      {children}
    </a>
  );
}