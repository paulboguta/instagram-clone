import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useState, useEffect, useMemo } from "react";
import { getUserProfileData } from "features/users/users.service";
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
  const [following, setFollowing] = useState<string[]>([]);
  const [followers, setFollowers] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserProfileData(id);
      setFollowing(data.data()!.following);
      setFollowers(data.data()!.followers);
    };
    getData();
  }, [id]);

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
          following.map((followee: any) => {
            return (
              <FollowersModalButton
                img={followee.profilePic}
                username={followee.username}
                id={followee.uid}
                onClickHideModals={onClickHideModals}
              />
            );
          })}
        {modal === "followers" &&
          followers.length &&
          followers.map((follower: any) => {
            return (
              <FollowersModalButton
                img={follower.profilePic}
                username={follower.username}
                id={follower.uid}
                onClickHideModals={onClickHideModals}
              />
            );
          })}
      </>
    </Wrapper>
  );
};
