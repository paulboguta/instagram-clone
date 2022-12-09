import { useNavigate } from "react-router-dom";
import { IComment, ILike } from "features/posts/types";
import { ILikesModalProps } from "types/likesModal.types";
import { Comments } from "./Comments";
import * as Styled from "./CommentsWrapper.styles";
import { CommentAdd } from "./CommentAdd";

interface ICommentsWrapperProps extends ILikesModalProps {
  likes: ILike[];
  comments: IComment[];
  id: string | undefined;
  hideComments: boolean;
  postUid: string;
}

export const CommentsWrapper = ({
  likes,
  comments,
  id,
  postUid,
  hideComments,
  onClickShowModalLikes,
}: ICommentsWrapperProps) => {
  const navigate = useNavigate();

  const onClickLikesCount = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickShowModalLikes!(event.currentTarget.id);
  };

  const onClickViewComments = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/post/${event.currentTarget.id}`);
  };

  return (
    <Styled.Wrapper>
      <Styled.LikesCount onClick={onClickLikesCount} id={id}>
        {likes?.length} likes
      </Styled.LikesCount>
      {!hideComments && (
        <Styled.ButtonViewComments onClick={onClickViewComments} id={id}>
          View All Comments
        </Styled.ButtonViewComments>
      )}
      <hr />
      {!hideComments && <Comments comments={comments} />}
      <CommentAdd id={id} postUid={postUid} />
    </Styled.Wrapper>
  );
};
