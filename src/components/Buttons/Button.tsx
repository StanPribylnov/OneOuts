import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  icon,
  className,
}) => {
  const defaultStyles =
    'inline-flex items-center self-start justify-center px-4 py-2';

  const combinedStyles = `${defaultStyles} ${className || ''}`;

  const content = (
    <>
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
};

export default Button;
