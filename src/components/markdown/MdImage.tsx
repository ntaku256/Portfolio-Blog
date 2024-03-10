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
  let modifiedSrc;
  if (src && src.startsWith("../..")) {
    modifiedSrc = src.replace("../..", "");;  
  } 
  else {
    // もしsrcがundefinedの場合や"../.."から始まらない場合は、元のsrcをそのまま使用する
    modifiedSrc = src;
  }

  return <img src={basePath+modifiedSrc} alt={alt} title={title} width={width}/>;
};

export default MdImage;

