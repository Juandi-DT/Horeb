import { FC } from "react";
import { IconProps } from "../../utils/interfaces";

const Menu: FC<IconProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 11.75V13.4375C23 14.0598 22.4861 14.5625 21.85 14.5625H20.6533C20.3802 16.1586 18.9606 17.375 17.25 17.375C15.5394 17.375 14.1198 16.1586 13.8467 14.5625H9.15328C8.88016 16.1586 7.46062 17.375 5.75 17.375C4.03937 17.375 2.62128 16.1586 2.3478 14.5625H1.15C0.514984 14.5625 0 14.0598 0 13.4375V9.5C0 8.54727 0.604109 7.73516 1.45763 7.40469L2.95406 3.74668C3.47803 2.46523 4.74734 1.625 6.15609 1.625H12.6931C13.7425 1.625 14.702 2.09117 15.3884 2.89168L18.9822 7.28516C21.2463 7.53477 23 9.45781 23 11.7184V11.75ZM6.15609 3.875C5.68531 3.875 5.26484 4.12461 5.08875 4.58164L3.99984 7.25H8.05V3.875H6.15609ZM9.775 7.25H16.0066L13.5916 4.29688C13.3759 4.02969 13.013 3.875 12.6931 3.875H9.775V7.25ZM18.878 14.5625C18.9391 14.3551 18.975 14.1969 18.975 14C18.975 13.0684 18.2023 12.3125 17.25 12.3125C16.2977 12.3125 15.525 13.0684 15.525 14C15.525 14.1969 15.5286 14.3551 15.622 14.5625C15.8592 15.2164 16.4989 15.6875 17.25 15.6875C18.0011 15.6875 18.6408 15.2164 18.878 14.5625ZM7.37797 14.5625C7.43906 14.3551 7.475 14.1969 7.475 14C7.475 13.0684 6.70234 12.3125 5.75 12.3125C4.79766 12.3125 4.025 13.0684 4.025 14C4.025 14.1969 4.02859 14.3551 4.12203 14.5625C4.35922 15.2164 4.99891 15.6875 5.75 15.6875C6.50109 15.6875 7.14078 15.2164 7.37797 14.5625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Menu;
