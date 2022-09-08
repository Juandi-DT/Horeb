import { FC, useState } from "react";
import Button from "../components/commons/Button";
import Persona from "../components/icons/Persona";
import Coche from "../components/icons/Coche";
import Close from "../components/icons/Close";
import useData from "../hooks/useData";
import { DataContextProps } from "../utils/interfaces";

interface MenuProps {
  setMenu: (prev: boolean) => void | null;
}

const Menu: FC<MenuProps> = ({ setMenu }) => {
  const [content, setContent] = useState<number>(0);
  const { setData } = useData() as DataContextProps;

  const close = () => {
    setMenu(false);
  };
  const deleteAllData = () => {
    localStorage.removeItem("data");
    setData({
      personas: [],
      coches: [],
    });
    close();
  };
  return (
    <div className="menu-container">
      <div className="dark-close" onClick={close}></div>
      <div className="menu">
        <div className="close">
          <Close onClick={close} />
        </div>
        {!content ? (
          <InitialContent
            setContent={setContent}
            deleteAllData={deleteAllData}
          />
        ) : content === 1 ? (
          <PersonaForm close={close} />
        ) : (
          <CocheForm close={close} />
        )}
      </div>
    </div>
  );
};

interface OtherProps {
  setContent: (prev: number) => void | null;
  deleteAllData: () => void;
}

const InitialContent: FC<OtherProps> = ({ setContent, deleteAllData }) => (
  <div className="center">
    <span className="title blue">Que quieres agregar:</span>
    <div className="flex-c" style={{ gap: "1pc" }}>
      <Button color={1} bk={1} onClick={() => setContent(1)}>
        <Persona />
        Personas
      </Button>
      <Button color={1} bk={0} onClick={() => setContent(2)}>
        <Coche />
        Coches
      </Button>
    </div>
    <span className="title blue">O eliminar info:</span>
    <Button
      color={1}
      bk={0}
      style={{ background: "#fd4b4b" }}
      onClick={deleteAllData}
    >
      Eliminar
    </Button>
  </div>
);

interface Forms {
  close: () => void;
}

const PersonaForm: FC<Forms> = ({ close }) => {
  const { data, setData } = useData() as DataContextProps;
  const [formData, setFormData] = useState<{
    name: string;
    coche: number;
  }>({
    name: "",
    coche: 0,
  });
  const submit = () => {
    if (formData.name !== "") {
      setData((prev: any) => ({
        ...prev,
        personas: [...prev.personas, formData],
      }));
      close();
    }
  };
  return (
    <div className="form-group">
      <label className="flex-c">
        <span>
          <Persona />
          Nombre:
        </span>
        <input
          type="text"
          value={formData?.name}
          placeholder="Name"
          onChange={e =>
            setFormData((prev: any) => ({ ...prev, name: e.target.value }))
          }
        />
      </label>

      <label className="flex-c">
        <span>
          <Coche />
          Coche:
        </span>
        <select
          value={formData?.coche}
          onChange={e =>
            setFormData((prev: any) => ({ ...prev, coche: e.target.value }))
          }
        >
          <option value={0}>Ningun coche</option>

          {data.coches.map(({ name }, idx) => {
            const numberToPeople = data.personas.filter(
              persona => persona?.coche === idx + 1 && persona
            );
            return (
              <option value={idx + 1} key={idx}>
                {name} ({numberToPeople.length})
              </option>
            );
          })}
        </select>
      </label>

      <Button color={1} bk={1} onClick={submit}>
        Guardar
      </Button>
    </div>
  );
};

const CocheForm: FC<Forms> = ({ close }) => {
  const { data, setData } = useData() as DataContextProps;
  const [formData, setFormData] = useState<{
    name: string;
    personas: string[];
  }>({
    name: "",
    personas: [],
  });

  const addPersona = (val: string) => {
    const id = parseInt(val);
    if (id !== 0) {
      const newPerson = data.personas[id - 1].name;
      setFormData((prev: any) => {
        if (!prev.personas.includes(newPerson))
          return {
            ...prev,
            personas: [...prev.personas, newPerson],
          };
        else return { ...prev };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        personas: [],
      }));
    }
  };
  const submit = () => {
    if (formData.name !== "") {
      const idxLatestCoche = data.coches.length + 1;
      const personas = data.personas.map(({ name, coche }) => {
        let loes = false;
        formData.personas.map(personaName => {
          if (personaName === name) loes = true;
        });
        return { name, coche: loes ? idxLatestCoche : coche };
      });
      setData((prev: any) => ({
        personas,
        coches: [...prev.coches, { name: formData.name }],
      }));
      close();
    }
  };
  return (
    <div className="form-group">
      <label className="flex-c">
        <span>
          <Coche />
          Nombre:
        </span>
        <input
          type="text"
          value={formData?.name}
          placeholder="Name"
          onChange={e =>
            setFormData((prev: any) => ({ ...prev, name: e.target.value }))
          }
        />
      </label>

      <label className="flex-c">
        <span>
          <Persona />
          Personas:
        </span>
        <select onChange={e => addPersona(e.target.value)}>
          <option value={0}>Ninguna persona</option>
          {data.personas.map(({ name, coche }, idx) => {
            const cocheName = coche ? data.coches[coche - 1].name : "Ninguno";
            return (
              <option value={idx + 1} key={idx}>
                {name} (coche: {cocheName})
              </option>
            );
          })}
        </select>
        {formData.personas.map((name, idx) => (
          <span key={idx}>-{name}</span>
        ))}
      </label>

      <Button color={1} bk={0} onClick={submit}>
        Guardar
      </Button>
    </div>
  );
};

export default Menu;
