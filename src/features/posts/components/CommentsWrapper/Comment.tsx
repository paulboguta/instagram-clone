import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "features/user/types";
import { selectUsers } from "features/user/store/usersSlice";
import * as Styled from "./CommentsWrapper.styles";

export const Comment = ({ uid, hideComments, comment }: any) => {
  const navigate = useNavigate();

  const user = useSelector(selectUsers).find((u: IUser) => {
    return u.uid === uid;
  });

  const onClickUsernameMoveToUserProfile = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    navigate(`/user/${event.currentTarget.id}`);
  };

  return (
    <div>
      {!hideComments ? (
        <Styled.CommentStyled>
          <Styled.CommentUser
            id={uid}
            onClick={onClickUsernameMoveToUserProfile}
          >
            @{user?.username}
          </Styled.CommentUser>
          <Styled.CommentText>{comment}</Styled.CommentText>
        </Styled.CommentStyled>
      ) : (
        <Styled.PostPageComment>
          <Styled.PostPageCommentUserPic src={user?.profilePic} />
          <Styled.PostPageCommentUser
            id={uid}
            onClick={onClickUsernameMoveToUserProfile}
          >
            @{user?.username}
          </Styled.PostPageCommentUser>
          <Styled.PostPageCommentText>{comment}</Styled.PostPageCommentText>
        </Styled.PostPageComment>
      )}
    </div>
  );
};
