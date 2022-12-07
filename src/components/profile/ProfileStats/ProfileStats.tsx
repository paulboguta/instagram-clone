import { getUserPostsCounter } from "features/user/services/users.service";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import {
  Wrapper,
  Posts,
  FollowersButton,
  Gray,
  FollowingButton,
} from "./ProfileStats.styles";

interface IProfileStatsProps {
  onClickShowFollowersModal: () => void;
  onClickShowFollowingModal: () => void;
}

export const ProfileStats = ({
  onClickShowFollowersModal,
  onClickShowFollowingModal,
}: IProfileStatsProps) => {
  const [postsCounter, setPostsCounter] = useState(0);
  const { uid, followers, following } = useSelector(
    (state: RootState) => state.rootReducer.currentProfileReducer
  );

  const getPostsCounter = useCallback(async () => {
    setPostsCounter(await getUserPostsCounter(uid));
  }, [uid]);

  useEffect(() => {
    getPostsCounter();
  }, [getPostsCounter]);

  return (
    <Wrapper>
      <Posts>
        <Gray>{postsCounter}</Gray>Posts
      </Posts>
      <FollowersButton onClick={onClickShowFollowersModal}>
        <h2>Followers</h2>
        <Gray>{followers.length}</Gray>
      </FollowersButton>
      <FollowingButton onClick={onClickShowFollowingModal}>
        <h2>Following</h2>
        <Gray>{following.length}</Gray>
      </FollowingButton>
    </Wrapper>
  );
};
