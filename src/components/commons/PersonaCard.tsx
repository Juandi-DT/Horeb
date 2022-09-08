import { FC, useState } from "react";
import Add from "../icons/Add";
import Button from "./Button";
import Coche from "../../components/icons/Coche";
import Check from "../icons/Check";

interface CardProps {
  name: string;
  coche: string;
  setPage?: (prev: any) => void;
  choosen?: boolean;
  setData?: (prev: any) => void;
}

const PersonaCard: FC<CardProps> = ({
  name,
  coche,
  setPage,
  setData,
  choosen = false,
}) => {
  const [isChoose, setIsChoose] = useState(false);
  const choose = () => {
    if (choosen && setData) {
      setIsChoose(true);
      setData((prev: any) => {
        const noDuplicateArr = new Set([...prev, name]);
        return [...noDuplicateArr];
      });
    }
  };
  const changePage = () => {
    if (setPage) setPage({ name, page: 1 });
  };
  return (
    <div
      className="persona-card"
      onClick={choose}
      style={choosen ? { justifyContent: "space-evenly" } : {}}
    >
      {isChoose && (
        <div className="choosen">
          <Check />
        </div>
      )}
      <span className="black">{name}</span>
      {!choosen && <Add onClick={changePage} />}

      <Button
        color={1}
        bk={1}
        style={coche === "ninguno" && { background: "#949494" }}
      >
        {coche !== "ninguno" && <Coche />}

        {coche}
      </Button>
    </div>
  );
};

export default PersonaCard;
