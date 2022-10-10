import React, { useContext } from "react";
import { LikesModalContext } from "../../../contexts/LikesModalContext";
import { Wrapper } from "./ProfilePost.styles";

interface IProfilePostProps {
  src: string;
  id: string;
}

export const ProfilePost = ({ src, id }: IProfilePostProps) => {
  const { onClickPost } = useContext(LikesModalContext);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickPost(id, event);
  };
  return (
    <Wrapper onClick={onClick}>
      <img src={src} />
    </Wrapper>
  );
};
