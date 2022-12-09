import { useNavigate } from "react-router-dom";
import * as Styled from "./ProfilePost.styles";

interface IProfilePostProps {
  src: string;
  id: string;
}

export const ProfilePost = ({ src, id }: IProfilePostProps) => {
  const navigate = useNavigate();
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/post/${event.currentTarget.id}`);
  };
  return (
    <Styled.Wrapper onClick={onClick} id={id}>
      <img src={src} alt="profile img" />
    </Styled.Wrapper>
  );
};
