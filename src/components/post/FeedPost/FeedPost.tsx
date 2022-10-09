import {
  Wrapper,
  Img,
  ButtonPost,
  ProfileImg,
  WrapperTopButtons,
  ButtonEdit,
} from "./FeedPost.styles";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import { PostButtonsComments } from "../PostButtonsComments/PostButtonsComments";

interface IFeedPostProps {
  username: string;
  profilePic: string;
  description: string;
  image: string;
  comments: string[];
  likes: string[];
  id?: string;
  clickHandler(): void;
}

export const FeedPost = ({
  username,
  profilePic,
  description,
  image,
  comments,
  likes,
  id,
  clickHandler,
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
      <PostButtonsComments
        likes={likes}
        comments={comments}
        id={id}
        clickHandler={clickHandler}
      />
    </Wrapper>
  );
};
