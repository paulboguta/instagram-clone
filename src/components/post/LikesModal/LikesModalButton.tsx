import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Button } from "./LikesModal.styles";
import { LikesModalContext } from "../../../contexts/LikesModalContext";

interface ILikesModalButtonProps {
  img: string;
  username: string;
  uid?: string;
}

export const LikesModalButton = ({
  img,
  username,
  uid,
}: ILikesModalButtonProps) => {
  const navigate = useNavigate();
  const id = window.location.pathname.slice(6);
  const { onClickHideLikesModal } = useContext(LikesModalContext);

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    if (event.currentTarget.id === id) {
      onClickHideLikesModal();
    } else {
      navigate(`/user/${event.currentTarget.id}`);
      onClickHideLikesModal();
    }
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={uid}>
      <img src={img} />
      <div>@{username}</div>
    </Button>
  );
};
