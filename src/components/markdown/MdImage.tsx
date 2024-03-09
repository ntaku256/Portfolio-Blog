import { FC } from "react";

type MdImageType = {
  src?: string;
  alt?: string;
  title?: string;
  width?: string | number;
};

const MdImage: FC<MdImageType> = (props) => {
  const { src, alt, title, width } = { ...props };
  const basePath = process.env.PUBLIC_URL || "";

  return <img src={basePath+src} alt={alt} title={title} width={width}/>;
};

export default MdImage;

