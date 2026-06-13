import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./UI.css";

// ==========================================
// 1. Button Component
// ==========================================
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "outline" | "solid";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "outline",
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`universal-btn btn-${variant} ${className}`}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </button>
  );
};

// ==========================================
// 2. Loader Component
// ==========================================
interface LoaderProps {
  text?: string;
  size?: "small" | "medium" | "large";
}

export const Loader: React.FC<LoaderProps> = ({
  text = "Loading",
  size = "medium",
}) => {
  return (
    <div className="universal-loader-wrap">
      <div className={`universal-loader size-${size}`}>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      {text && <span className="loader-text">{text}</span>}
    </div>
  );
};

// ==========================================
// 3. HoverLink Component (Roll-up Text Animation)
// ==========================================
interface HoverLinkProps {
  text: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  active?: boolean;
  target?: string;
  rel?: string;
}

export const HoverLink: React.FC<HoverLinkProps> = ({
  text,
  href,
  onClick,
  className = "",
  active = false,
  target,
  rel,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`hover-link ${active ? "active" : ""} ${className}`}
      target={target}
      rel={rel}
    >
      {text}
    </a>
  );
};

// ==========================================
// 4. Select Component (Custom Dropdown)
// ==========================================
interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select option",
  className = "",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      className={`universal-select-container ${isOpen ? "is-open" : ""} ${
        disabled ? "is-disabled" : ""
      } ${className}`}
      ref={containerRef}
    >
      <div className="universal-select-trigger" onClick={handleToggle}>
        <span className="selected-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`select-arrow-icon ${isOpen ? "rotate" : ""}`}>
          <MdKeyboardArrowDown />
        </span>
      </div>

      {isOpen && (
        <ul className="universal-select-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`select-option-item ${
                option.value === value ? "is-selected" : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
