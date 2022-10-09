import { Wrapper, Button, ButtonClose, Likes0Info } from "./LikesModal.styles";
import { useContext, useEffect, useState } from "react";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";
import { LikesModalContext } from "../../../contexts/LikesModalContext";
import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { LikesModalButton } from "./LikesModalButton";

interface ILikesModalProps {
  id: string;
}

export const LikesModal = ({ id }: ILikesModalProps) => {
  const [likes, setLikes] = useState<any[]>();

  const { profileClicked, resultClicked } = useContext(ProfileResultContext);
  const { onClickHideLikesModal, onClickShowLikesModal } =
    useContext(LikesModalContext);

  const getData = async () => {
    const postsRef = query(collectionGroup(db, "posts"));
    const data = await getDocs(postsRef);
    data.docs.forEach((doc) => {
      if (doc.data()!.id === id) {
        setLikes(doc.data()!.likes);
      }
    });
  };

  useEffect(() => {
    getData();
  }, [onClickShowLikesModal]);
  return (
    <Wrapper>
      <ButtonClose onClick={onClickHideLikesModal}>
        <IconContext.Provider value={{ size: "24px" }}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      <>
        {typeof likes !== "undefined" && likes.length > 0 ? (
          likes.map((like: any, key: number) => {
            return (
              <LikesModalButton
                key={key}
                username={like.username}
                uid={like.uid}
                img={like.profilePic}
              />
            );
          })
        ) : (
          <Likes0Info>0 likes for now...</Likes0Info>
        )}
      </>
    </Wrapper>
  );
};

// export const FollowersModal = ({ header, modal }: IFollowersModalProps) => {
//     // 1. get user id + url user id
//     // 2. map through redux users state
//     // 3. render followers/following
//     // 4. get username, profilePic, uid

//     const [following, setFollowing] = useState<string[]>([]);
//     const [followers, setFollowers] = useState<string[]>([]);
//     const id = window.location.pathname.slice(6);
//     const url = window.location.pathname.split("/").pop();
//     const currentUser = useSelector(
//       (state: RootState) => state.rootReducer.currentUser
//     );
//     const { profileClicked, resultClicked } = useContext(ProfileResultContext);
//     const { onClickHideModals } = useContext(FollowingFollowersContext);

//     const getDocs = async () => {
//       const usersRef = doc(db, "users", id);
//       const data = await getDoc(usersRef);
//       setFollowing(data.data()!.following);
//       setFollowers(data.data()!.followers);
//     };

//     useEffect(() => {
//       getDocs();
//     }, [currentUser, profileClicked, url, resultClicked]);

//     return (
//       <Wrapper>
//         <ButtonClose onClick={onClickHideModals}>
//           <IconContext.Provider value={{ size: "24px" }}>
//             <AiOutlineClose />
//           </IconContext.Provider>
//         </ButtonClose>
//         <div>{header}</div>
//         <>
//           {modal == "following" &&
//             following.length > 0 &&
//             following.map((followee: any) => {
//               return (
//                 <FollowersModalButton
//                   img={followee.profilePic}
//                   username={followee.username}
//                   uid={followee.uid}
//                 />
//               );
//             })}
//           {modal == "followers" &&
//             followers.length > 0 &&
//             followers.map((follower: any) => {
//               return (
//                 <FollowersModalButton
//                   img={follower.profilePic}
//                   username={follower.username}
//                   uid={follower.uid}
//                 />
//               );
//             })}
//         </>
//       </Wrapper>
//     );
//   };
