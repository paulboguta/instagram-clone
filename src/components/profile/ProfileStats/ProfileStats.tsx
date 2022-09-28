import {
  Wrapper,
  Posts,
  FollowersButton,
  Gray,
  FollowingButton,
} from "./ProfileStats.style";

export const ProfileStats = () => {
  return (
    <Wrapper>
      <Posts>
        <Gray>0</Gray>Posts
      </Posts>
      <FollowersButton>
        <h2>Followers</h2>
        <Gray>0</Gray>
      </FollowersButton>
      <FollowingButton>
        <h2>Following</h2>
        <Gray>0</Gray>
      </FollowingButton>
    </Wrapper>
  );
};
