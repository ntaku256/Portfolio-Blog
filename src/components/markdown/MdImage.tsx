import { FC } from "react";

type MdImageType = {
  src?: string;
  alt?: string;
  title?: string;
};

const MdImage: FC<MdImageType> = (props) => {
  const { src, alt, title } = { ...props };
  const basePath = process.env.PUBLIC_URL || "";

  return <img src={basePath+src} alt={alt} title={title} width="80%" />;
};

export default MdImage;

