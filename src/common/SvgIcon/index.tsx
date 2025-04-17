import { SvgIconProps } from "../../components/Block/types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`${process.env.PUBLIC_URL}/img/svg/${src}`} alt={src} width={width} height={height} />
);
