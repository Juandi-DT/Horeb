import { FC, useEffect, useRef, useState } from "react";
import Button from "../../components/commons/Button";
import Persona from "../../components/icons/Persona";
import Coche from "../../components/icons/Coche";
import useData from "../../hooks/useData";
import { DataContextProps } from "../../utils/interfaces";
import PersonaCard from "../../components/commons/PersonaCard";
import CocheCard from "../../components/commons/CocheCard";

import styles from "./List.module.css";

interface ListPageProps {
  setPage: (prev: any) => void;
}

const List: FC<ListPageProps> = ({ setPage }) => {
  const [filter, setFilter] = useState(0);

  const div = useRef<null | HTMLDivElement>(null);

  const { data } = useData() as DataContextProps;
  useEffect(() => {
    data?.personas.length === 0 && setFilter(1);
    data?.coches.length === 0 && setFilter(0);

    div?.current && div?.current.scrollTo(0, 0);
  }, [filter]);

  return (
    <>
      <div className={styles.filters}>
        {data?.personas.length > 0 && (
          <Button color={0} bk={1} onClick={() => setFilter(0)}>
            <Persona />
            Personas
          </Button>
        )}
        {data?.coches.length > 0 && (
          <Button color={0} bk={0} onClick={() => setFilter(1)}>
            <Coche />
            Coches
          </Button>
        )}
      </div>
      <div className={`${styles.list} ${filter && styles.cl1}`} ref={div}>
        {filter === 0 &&
          data.personas.map(({ name, coche }, idx) => {
            const cocheName = coche && data.coches[coche - 1]?.name;
            return (
              <PersonaCard
                name={name}
                coche={cocheName || "Ninguno"}
                key={idx}
                setPage={setPage}
              />
            );
          })}
        {filter === 1 &&
          data.coches.map(({ name }, idx) => {
            const personas = data.personas.filter(({ coche, name }) => {
              if (coche && coche - 1 === idx) return { name };
            });
            // console.log(personas);
            return (
              <CocheCard
                name={name}
                personas={personas}
                key={idx}
                setPage={setPage}
              />
            );
          })}
      </div>
    </>
  );
};

export default List;
