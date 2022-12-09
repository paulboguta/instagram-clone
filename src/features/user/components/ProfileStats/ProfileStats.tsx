import { getUserPostsCounter } from "features/user/services/users.service";
import { selectUsers } from "features/user/store/usersSlice";
import { IUser } from "features/user/types";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Styled from "./ProfileStats.styles";

interface IProfileStatsProps {
  onClickShowFollowersModal: () => void;
  onClickShowFollowingModal: () => void;
}

export const ProfileStats = ({
  onClickShowFollowersModal,
  onClickShowFollowingModal,
}: IProfileStatsProps) => {
  const [postsCounter, setPostsCounter] = useState(0);
  const { userID } = useParams();
  const user = useSelector(selectUsers).find((u: IUser) => {
    return u.uid === userID;
  });

  const getPostsCounter = useCallback(async () => {
    setPostsCounter(await getUserPostsCounter(userID!));
  }, [userID]);

  useEffect(() => {
    getPostsCounter();
  }, [getPostsCounter]);

  return (
    <Styled.Wrapper>
      <Styled.Posts>
        <Styled.Gray>{postsCounter}</Styled.Gray>Posts
      </Styled.Posts>
      <Styled.FollowersButton onClick={onClickShowFollowersModal}>
        <h2>Followers</h2>
        <Styled.Gray>{user?.followers.length}</Styled.Gray>
      </Styled.FollowersButton>
      <Styled.FollowingButton onClick={onClickShowFollowingModal}>
        <h2>Following</h2>
        <Styled.Gray>{user?.following.length}</Styled.Gray>
      </Styled.FollowingButton>
    </Styled.Wrapper>
  );
};
