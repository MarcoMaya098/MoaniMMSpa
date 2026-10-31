import { SvgIconProps } from "../../components/Block/types";

export const imagePath = (src: string) =>
  `${process.env.PUBLIC_URL}/img/svg/${src}`;

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={imagePath(src)} alt={src} width={width} height={height} />
);
