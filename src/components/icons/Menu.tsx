import { FC } from "react";
import { IconProps } from "../../utils/interfaces";

const Menu: FC<IconProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.96875H25.99V5.10082H0V0.96875ZM6.4975 11.2989H25.99V15.431H6.4975V11.2989ZM14.6194 21.6291H25.99V25.7612H14.6194V21.6291Z"
        fill="black"
      />
    </svg>
  );
};

export default Menu;
