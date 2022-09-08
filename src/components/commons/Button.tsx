import { FC, MouseEventHandler, ReactNode, useEffect, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  color: number;
  bk: number;
  onClick?: MouseEventHandler<Element>;
  style?: any;
}

const Button: FC<ButtonProps> = ({
  children,
  color = 0,
  bk = 0,
  onClick,
  style,
}) => {
  return (
    <div
      className={`Button title ${!bk ? "b-coches" : "b-personas"}  ${
        color ? "gray" : "black"
      }`}
      onClick={onClick}
      style={style || null}
    >
      {children}
    </div>
  );
};

export default Button;
