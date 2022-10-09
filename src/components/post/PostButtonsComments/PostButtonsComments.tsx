import {
  ButtonsLikeCommentWrapper,
  ButtonLike,
  ButtonComment,
  BoxShadow,
} from "./PostButtonsComments.styles";
import { CommentsWrapper } from "../CommentsWrapper/CommentsWrapper";
import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";

interface IPostButtonsCommentsProps {
  likes: string[];
  comments: string[];
}

export const PostButtonsComments = ({
  likes,
  comments,
}: IPostButtonsCommentsProps) => {
  return (
    <BoxShadow>
      <ButtonsLikeCommentWrapper>
        <IconContext.Provider value={{ size: "22px" }}>
          <ButtonLike>
            <AiOutlineHeart />
          </ButtonLike>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "20px" }}>
          <ButtonComment>
            <BsChat />
          </ButtonComment>
        </IconContext.Provider>
      </ButtonsLikeCommentWrapper>
      <CommentsWrapper likes={likes} comments={comments} />
    </BoxShadow>
  );
};
