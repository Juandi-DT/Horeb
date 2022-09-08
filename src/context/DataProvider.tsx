import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { DataContextProps, Data } from "../utils/interfaces";

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps | null>(null);
const initialState = {
  personas: [],
  coches: [],
};
export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data>(initialState);

  useEffect(() => {
    const getLocalData = () => {
      const localData: string | null = localStorage.getItem("data");
      if (!localData) {
        setData(initialState);
        localStorage.setItem("data", `${initialState}`);
      } else {
        const newData = JSON.parse(localData);
        setData(newData || initialState);
      }
    };
    getLocalData();
  }, []);

  useEffect(() => {
    const sincronization = () => {
      const newData = JSON.stringify(data);
      // console.log("syncronizate data: ", newData);
      localStorage.setItem("data", newData);
    };
    if (data) {
      sincronization();
    }
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
