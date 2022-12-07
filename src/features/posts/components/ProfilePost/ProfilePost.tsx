import { useNavigate } from "react-router-dom";
import { Wrapper } from "./ProfilePost.styles";

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
    <Wrapper onClick={onClick} id={id}>
      <img src={src} alt="profile img" />
    </Wrapper>
  );
};
