import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/store";
import { IUser } from "types/user.types";
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

  const { profilePic, username } = useSelector((state: RootState) =>
    state.rootReducer.usersReducer.users.find((user: IUser) => {
      return user.uid === id;
    })
  );

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    navigate(`/user/${event.currentTarget.id}`);
    onClickHideModals();
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={id}>
      <img src={profilePic} alt="profile pic" />
      <div>@{username}</div>
    </Button>
  );
};
