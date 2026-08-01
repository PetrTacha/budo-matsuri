import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

const Button = ({
  children,
  href,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <button>
        <Link href={href} className={buttonClasses} {...props}>
          {children}
        </Link>
      </button>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
