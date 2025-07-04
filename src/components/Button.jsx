import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload } from 'react-icons/fa';

const Button = ({ children, icon, variant = 'primary', href, download, onClick }) => {
  const baseStyle = `inline-flex items-center font-mono px-6 py-2 rounded-md shadow-lg transition-all duration-300`;
  const variants = {
    primary: `bg-accent text-primary-bg hover:bg-opacity-90`,
    outline: `border-2 border-accent text-accent hover:bg-accent hover:text-primary-bg`,
    danger: `bg-iron-red text-primary-bg hover:bg-opacity-90`,
  };

  const content = (
    <span className="flex items-center gap-2">
      {icon && icon}
      {children}
    </span>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.element,
  variant: PropTypes.oneOf(['primary', 'outline', 'danger']),
  href: PropTypes.string,
  download: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
