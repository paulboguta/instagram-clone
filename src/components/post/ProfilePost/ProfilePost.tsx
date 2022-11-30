import { useNavigate } from "react-router-dom";
import { Wrapper } from "./ProfilePost.styles";

interface IProfilePostProps {
  src: string;
}

export const ProfilePost = ({ src }: IProfilePostProps) => {
  const navigate = useNavigate();
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/post/${event.currentTarget.id}`);
  };
  return (
    <Wrapper onClick={onClick}>
      <img src={src} alt="profile img" />
    </Wrapper>
  );
};
