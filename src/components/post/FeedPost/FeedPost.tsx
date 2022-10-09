import {
  Wrapper,
  Img,
  ButtonPost,
  ProfileImg,
  WrapperTopButtons,
  ButtonEdit,
} from "./FeedPost.styles";

import { BsThreeDots } from "react-icons/bs";

import Photo1 from "../../../assets/dummyPosts/post1.png";
import Profile1 from "../../../assets/memoji/Memoji-01.png";
import { IconContext } from "react-icons";
import { PostButtonsComments } from "../PostButtonsComments/PostButtonsComments";

interface IFeedPostProps {
  username: string;
  profilePic: string;
  description: string;
  image: string;
  comments: string[];
  likes: string[];
}

export const FeedPost = ({
  username,
  profilePic,
  description,
  image,
  comments,
  likes,
}: IFeedPostProps) => {
  return (
    <Wrapper>
      <WrapperTopButtons>
        <ButtonPost>
          <ProfileImg src={profilePic} />
          <div>@{username}</div>
        </ButtonPost>
        <ButtonEdit>
          <IconContext.Provider value={{ size: "20px" }}>
            <BsThreeDots />
          </IconContext.Provider>
        </ButtonEdit>
      </WrapperTopButtons>
      <Img src={image} />
      <PostButtonsComments likes={likes} comments={comments} />
    </Wrapper>
  );
};
