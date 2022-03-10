import { FC } from "react";

type ImageProps = {
  id: string;
  key: string;
};

export const Image: FC<ImageProps> = ({ key, id }) => {
  return (
    <img
      key={key}
      src={`https://irsooti.github.io/simon-baron-cohen-scraper/images/${id}.jpg`}
      alt="Eyes"
      width={300}
      height={130}
    />
  );
};
