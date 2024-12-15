import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string; // Button text
  href?: string; // Optional link for rendering as an <a> tag
  onClick?: () => void; // Optional onClick handler
  icon?: React.ReactNode; // Icon as a React component
  className?: string; // Custom styles for the button
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  icon,
  className,
}) => {
  // Default styles for the button
  const defaultStyles =
    'inline-flex items-center self-start justify-center px-4 py-2';

  // Combine default styles with any custom styles provided via props
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
