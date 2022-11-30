import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { IFollower, IUser } from "types/user.types";
import uuid from "react-uuid";
import { Wrapper, ButtonClose } from "./FollowersModal.styles";
import { FollowersModalButton } from "./FollowersModalButton";

interface IFollowersModalProps {
  header: string;
  modal: string;
  id: string;
  onClickHideModals: () => void;
}

export const FollowersModal = ({
  header,
  modal,
  id,
  onClickHideModals,
}: IFollowersModalProps) => {
  const { following, followers } = useSelector((state: RootState) =>
    state.rootReducer.usersReducer.users.find((user: IUser) => {
      return user.uid === id;
    })
  );

  const IconValues = useMemo(
    () => ({
      size: "24px",
    }),
    []
  );

  return (
    <Wrapper>
      <ButtonClose onClick={onClickHideModals}>
        <IconContext.Provider value={IconValues}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      <div>{header}</div>
      <>
        {modal === "following" &&
          following.length &&
          following.map((followee: IFollower) => {
            return (
              <FollowersModalButton
                key={uuid()}
                id={followee.uid}
                onClickHideModals={onClickHideModals}
              />
            );
          })}
        {modal === "followers" &&
          followers.length &&
          followers.map((follower: IFollower) => {
            return (
              <FollowersModalButton
                key={uuid()}
                id={follower.uid}
                onClickHideModals={onClickHideModals}
              />
            );
          })}
      </>
    </Wrapper>
  );
};
