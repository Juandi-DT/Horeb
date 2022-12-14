import { useContext } from "react";
import DataContext from "../context/DataProvider";

export const useData = () => {
  return useContext(DataContext);
};

export default useData;
