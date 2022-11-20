import { useNavigate } from "react-router-dom";
import { Button } from "./FollowersModal.styles";

interface IFollowersModalButtonProps {
  img: string;
  username: string;
  id: string;
  onClickHideModals: () => void;
}

export const FollowersModalButton = ({
  img,
  username,
  id,
  onClickHideModals,
}: IFollowersModalButtonProps) => {
  const navigate = useNavigate();

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    if (event.currentTarget.id !== id) {
      navigate(`/user/${event.currentTarget.id}`);
    }
    onClickHideModals();
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={id}>
      <img src={img} alt="profile pic" />
      <div>@{username}</div>
    </Button>
  );
};
