import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useSelector } from "react-redux";
import { useState, useContext, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { RootState } from "store/store";
import { Wrapper, ButtonClose } from "./FollowersModal.styles";
import { FollowersModalButton } from "./FollowersModalButton";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";
import { FollowingFollowersContext } from "../../../contexts/FollowingFollowersContext";
import { db } from "../../../services/firebase";

interface IFollowersModalProps {
  header: string;
  modal: string;
}

export const FollowersModal = ({ header, modal }: IFollowersModalProps) => {
  // 1. get user id + url user id
  // 2. map through redux users state
  // 3. render followers/following
  // 4. get username, profilePic, uid

  const [following, setFollowing] = useState<string[]>([]);
  const [followers, setFollowers] = useState<string[]>([]);
  const id = window.location.pathname.slice(6);
  const url = window.location.pathname.split("/").pop();
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const { profileClicked, resultClicked } = useContext(ProfileResultContext);
  const { onClickHideModals } = useContext(FollowingFollowersContext);

  const getDocs = async () => {
    const usersRef = doc(db, "users", id);
    const data = await getDoc(usersRef);
    setFollowing(data.data()!.following);
    setFollowers(data.data()!.followers);
  };

  useEffect(() => {
    getDocs();
  }, [currentUser, profileClicked, url, resultClicked]);

  return (
    <Wrapper>
      <ButtonClose onClick={onClickHideModals}>
        <IconContext.Provider value={{ size: "24px" }}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      <div>{header}</div>
      <>
        {modal == "following" &&
          following.length > 0 &&
          following.map((followee: any) => {
            return (
              <FollowersModalButton
                img={followee.profilePic}
                username={followee.username}
                uid={followee.uid}
              />
            );
          })}
        {modal == "followers" &&
          followers.length > 0 &&
          followers.map((follower: any) => {
            return (
              <FollowersModalButton
                img={follower.profilePic}
                username={follower.username}
                uid={follower.uid}
              />
            );
          })}
      </>
    </Wrapper>
  );
};
