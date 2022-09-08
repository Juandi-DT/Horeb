import { FC, useState } from "react";
import Add from "../icons/Add";
import Button from "./Button";
import Coche from "../../components/icons/Coche";
import Persona from "../../components/icons/Persona";
import Check from "../icons/Check";

interface CardProps {
  name: string;
  personas: { name: string }[];
  setPage?: (prev: any) => void;
  choosen?: boolean;
  idx?: number;
  setData?: (prev: any) => void;
}

const CocheCard: FC<CardProps> = ({
  name,
  personas,
  setPage,
  setData,
  choosen = false,
  idx,
}) => {
  const [isChoose, setIsChoose] = useState(false);

  const choose = () => {
    if (choosen && idx !== undefined && setData) {
      setIsChoose(true);
      setData(idx + 1);
    }
  };
  const changePage = () => {
    if (setPage) setPage({ name, page: 2 });
  };
  return (
    <div className="coche-card" onClick={choose}>
      {isChoose && (
        <div className="choosen">
          <Check />
        </div>
      )}
      <span className="black title name-coche">
        <Coche /> {name}
      </span>
      <div className="add-icon">{!choosen && <Add onClick={changePage} />}</div>
      {personas.length === 0 ? (
        <Button
          color={1}
          bk={0}
          style={{ background: "#949494", width: "100%" }}
        >
          Ninguno
        </Button>
      ) : (
        personas.map(({ name }, idx) => (
          <Button color={1} bk={0} style={{ width: "100%" }} key={idx}>
            <Persona />
            {name}
          </Button>
        ))
      )}
    </div>
  );
};

export default CocheCard;
