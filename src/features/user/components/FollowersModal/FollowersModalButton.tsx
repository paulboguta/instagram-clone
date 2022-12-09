import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "features/user/types";
import { selectUsers } from "features/user/store/usersSlice";
import * as Styled from "./FollowersModal.styles";

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
    <Styled.Button onClick={onClickMoveToThisUser} id={id}>
      <img src={user?.profilePic} alt="profile pic" />
      <div>@{user?.username}</div>
    </Styled.Button>
  );
};
