import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}
