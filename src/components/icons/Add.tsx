import { FC } from "react";
import { IconProps } from "../../utils/interfaces";

const Add: FC<IconProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="22"
      height="22"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 0.312088C5.95416 0.312088 0.24 5.99281 0.24 13C0.24 20.0072 5.95416 25.6879 13 25.6879C20.0458 25.6879 25.76 20.0072 25.76 13C25.76 5.99281 20.0458 0.312088 13 0.312088ZM18.8 14.1534H14.16V18.7672H11.84V14.1534H7.2V11.8466H11.84V7.23277H14.16V11.8466H18.8V14.1534Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Add;
