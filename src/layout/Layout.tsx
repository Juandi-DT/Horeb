import { FC, ReactNode } from "react";
import backgroundWaves from "../assets/waves.png";
import MenuIcon from "../components/icons/Menu";
import Menu from "./Menu";

interface LayoutProps {
  children: ReactNode;
  menu: boolean;
  setMenu: (prev: boolean) => void | null;
  page: number;
}

const Layout: FC<LayoutProps> = ({ children, menu, setMenu, page }) => {
  return (
    <>
      <img
        src={backgroundWaves}
        alt="waves background"
        width="100%"
        height="100%"
        className="background"
      />
      {page === 0 && <div className="dark" />}
      {menu && <Menu setMenu={setMenu} />}
      <div className="content">
        <header>
          <h1>HOREB</h1>
          <MenuIcon onClick={() => setMenu(true)} />
        </header>
        <div className="main">{children}</div>
      </div>
    </>
  );
};

export default Layout;
