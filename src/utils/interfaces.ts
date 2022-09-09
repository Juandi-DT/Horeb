import { MouseEventHandler, ReactNode } from "react";

export interface ChildrenProp {
  children: ReactNode;
}

export interface IconProps {
  onClick?: MouseEventHandler<Element>;
}

export interface Data {
  personas: {
    name: string;
    coche: number;
  }[];
  coches: { name: string }[];
}
export interface DataContextProps {
  data: Data;
  setData: (data: any) => void | null;
}
