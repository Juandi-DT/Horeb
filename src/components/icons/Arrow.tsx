import { FC } from "react";
import { IconProps } from "../../utils/interfaces";

const Arrow: FC<IconProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="46"
      height="41"
      viewBox="0 0 46 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.8889 38L43 27.0957L31.8889 16.1915"
        stroke="#24285B"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 27.0957H25.2222C12.9493 27.0957 3 17.3316 3 5.28724V3.10639"
        stroke="#24285B"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
