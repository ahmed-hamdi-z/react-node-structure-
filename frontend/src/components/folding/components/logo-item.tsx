// Dependencies
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LogoItemProps {
  children: ReactNode;
  className?: string;
}

const LogoItem: FC<LogoItemProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LogoItem;
