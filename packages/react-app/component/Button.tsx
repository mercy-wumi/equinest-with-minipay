import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type,
  disabled,
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`rounded-lg gap-2 w-[fit-content] py-[0.5rem] px-2 whitespace-nowrap text-base text-darkGray bg-primaryYellow font-semibold mt-2 md:px-5 hover:shadow-md transition-all ease-in cursor-pointer ${className} ${
          disabled ? "bg-gray text-lightGray" : ""
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`gap-2 w-[fit-content] py-[0.8rem] px-2 whitespace-nowrap text-base bg-transparent border border-white text-white font-semibold md:py-[0.6875rem] md:px-5 hover:shadow-md cursor-pointer transition-all ease-in ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
