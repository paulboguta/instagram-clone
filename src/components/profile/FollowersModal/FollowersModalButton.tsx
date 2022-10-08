import { Button } from "./FollowersModal.styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FollowingFollowersContext } from "../../../contexts/FollowingFollowersContext";

interface IFollowersModalButtonProps {
  img: string;
  username: string;
  uid?: string;
}

export const FollowersModalButton = ({
  img,
  username,
  uid,
}: IFollowersModalButtonProps) => {
  const navigate = useNavigate();
  const id = window.location.pathname.slice(6);
  const { onClickHideModals } = useContext(FollowingFollowersContext);

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    if (event.currentTarget.id === id) {
      onClickHideModals();
    } else {
      navigate(`/user/${event.currentTarget.id}`);
      onClickHideModals();
    }
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={uid}>
      <img src={img} />
      <div>@{username}</div>
    </Button>
  );
};
