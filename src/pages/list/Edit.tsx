import { FC, useState } from "react";
import Button from "../../components/commons/Button";
import CocheCard from "../../components/commons/CocheCard";
import PersonaCard from "../../components/commons/PersonaCard";
import useData from "../../hooks/useData";
import Persona from "../../components/icons/Persona";
import Coche from "../../components/icons/Coche";

import { DataContextProps } from "../../utils/interfaces";
import styles from "./List.module.css";

interface EditProps {
  page: {
    name: string;
    page: number;
  };
  setPage: (prev: any) => void;
}

const Edit: FC<EditProps> = ({ page, setPage }) => {
  const { data, setData } = useData() as DataContextProps;
  const [dataPersonas, setDataPersonas] = useState(0);
  const [dataCoche, setDataCoche] = useState<string[]>([]);

  const onSubmit = () => {
    if (dataCoche.length > 0) {
      setData((prev: any) => {
        const { name } = page;
        const idCoche = prev.coches.findIndex(
          (coche: any) => coche.name === name
        );
        const newDataPersonas = prev.personas.map((persona: any) => {
          if (dataCoche.includes(persona.name))
            return { name: persona.name, coche: idCoche + 1 };
          else return persona;
        });
        return { ...prev, personas: newDataPersonas };
      });
      setPage({ name: "", page: 0 });
    } else if (dataPersonas !== 0) {
      setData((prev: any) => {
        const { name } = page;
        const idPersona = prev.personas.findIndex(
          (persona: any) => persona.name === name
        );
        prev.personas[idPersona] = { name, coche: dataPersonas };

        return prev;
      });
      setPage({ name: "", page: 0 });
    }
  };

  return (
    <>
      <div className="flex-c" style={{ gap: "2pc" }}>
        <span className="flex-c">
          Selecciona {page.page === 1 ? "el coche" : "a los pasajeros"} de:
          <Button color={1} bk={page.page === 1 ? 1 : 0}>
            {page.page === 1 ? <Persona /> : <Coche />}
            {page.name}
          </Button>
        </span>
        <div className={styles.filters}>
          <Button
            color={0}
            bk={1}
            onClick={() => setPage({ name: "", page: 0 })}
            style={{ background: "#fd4b4b" }}
          >
            Cancelar
          </Button>
          <Button
            color={0}
            bk={1}
            onClick={onSubmit}
            style={{ background: "#3ee03e" }}
          >
            Guardar
          </Button>
        </div>
      </div>
      <div className={`${styles.list} ${page.page === 1 && styles.cl1}`}>
        {page.page === 2 &&
          data.personas.map(({ name, coche }, idx) => {
            const cocheName = coche && data.coches[coche - 1]?.name;
            return (
              <PersonaCard
                name={name}
                coche={cocheName || "Ninguno"}
                choosen={true}
                setData={setDataCoche}
                key={idx}
              />
            );
          })}
        {page.page === 1 &&
          data.coches.map(({ name }, idx) => {
            const personas = data.personas.filter(({ coche, name }) => {
              if (coche && coche - 1 === idx) return { name };
            });
            // console.log(personas);
            return (
              <CocheCard
                name={name}
                personas={personas}
                choosen={true}
                setData={setDataPersonas}
                idx={idx}
                key={idx}
              />
            );
          })}
      </div>
    </>
  );
};

export default Edit;
