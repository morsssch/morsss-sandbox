import React from "react";
import "./Button.scss";

interface ButtonI {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonI> = ({
    children,
    onClick,
    disabled = false,
    className,
    ...props
}) => {
    const name = className || "btn";
    return (
        <button
            className={name}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
