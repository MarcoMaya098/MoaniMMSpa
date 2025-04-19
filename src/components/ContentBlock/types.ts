import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  buttonShowMore?: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        toredirect?: string;
      }
    | {
        title: string;
        color: string;
        toredirect: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
