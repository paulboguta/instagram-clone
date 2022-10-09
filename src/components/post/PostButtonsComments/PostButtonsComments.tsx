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
  id: string | undefined;
  clickHandler(): void;
}

export const PostButtonsComments = ({
  likes,
  comments,
  id,
  clickHandler,
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
      <CommentsWrapper
        likes={likes}
        comments={comments}
        id={id}
        clickHandler={clickHandler}
      />
    </BoxShadow>
  );
};
