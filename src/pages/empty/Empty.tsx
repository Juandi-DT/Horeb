import { FC } from "react";
import styles from "./Empty.module.css";
import emptyIcon from "../../assets/empty.png";
import Button from "../../components/commons/Button";
import Coche from "../../components/icons/Coche";
import Persona from "../../components/icons/Persona";
import Arrow from "../../components/icons/Arrow";
import Add from "../../components/icons/Add";

interface AddProps {
  setOpenMenu: (prev: any) => void | null;
}

const EmptyPage: FC<AddProps> = ({ setOpenMenu }) => {
  return (
    <div className={styles.addPage}>
      <div className="flex-c" style={{ gap: "1.3pc" }}>
        <img src={emptyIcon} alt="empty ilustration icon" />
        <span className="title gray" style={{ width: "70%" }}>
          Aqui no hay nada agregado :(
        </span>
      </div>
      <hr />

      <div className={styles.addSection}>
        <span className="title">Agrega aqui:</span>
        <div className={styles.btnSection}>
          <div>
            <Arrow />
          </div>
          <div className="flex-c blue-light">
            <div className="flex-c" onClick={() => setOpenMenu(true)}>
              <Add />
            </div>
          </div>
          <div style={{ transform: "rotate(180deg)" }}>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;
