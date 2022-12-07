import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "types/user.types";
import { selectUsers } from "user/store/slices/usersSlice";
import { Button } from "./FollowersModal.styles";

interface IFollowersModalButtonProps {
  id: string;
  onClickHideModals: () => void;
}

export const FollowersModalButton = ({
  id,
  onClickHideModals,
}: IFollowersModalButtonProps) => {
  const navigate = useNavigate();

  const user = useSelector(selectUsers).find((u: IUser) => {
    return u.uid === id;
  });

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    navigate(`/user/${event.currentTarget.id}`);
    onClickHideModals();
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={id}>
      <img src={user?.profilePic} alt="profile pic" />
      <div>@{user?.username}</div>
    </Button>
  );
};
