import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { IFollower, IUser } from "features/user/types";
import uuid from "react-uuid";
import { selectUsers } from "features/user/store/usersSlice";
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
  const user = useSelector(selectUsers).find((u: IUser) => {
    return u.uid === id;
  });

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
          user?.following.length &&
          user?.following.map((followee: IFollower) => {
            return (
              <FollowersModalButton
                key={uuid()}
                id={followee.uid}
                onClickHideModals={onClickHideModals}
              />
            );
          })}
        {modal === "followers" &&
          user?.followers.length &&
          user?.followers.map((follower: IFollower) => {
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
