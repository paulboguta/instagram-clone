import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "types/user.types";
import { selectUsers } from "user/store/slices/usersSlice";
import {
  CommentStyled,
  CommentText,
  CommentUser,
  PostPageComment,
  PostPageCommentText,
  PostPageCommentUser,
  PostPageCommentUserPic,
} from "./CommentsWrapper.styles";

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
        <CommentStyled>
          <CommentUser id={uid} onClick={onClickUsernameMoveToUserProfile}>
            @{user?.username}
          </CommentUser>
          <CommentText>{comment}</CommentText>
        </CommentStyled>
      ) : (
        <PostPageComment>
          <PostPageCommentUserPic src={user?.profilePic} />
          <PostPageCommentUser
            id={uid}
            onClick={onClickUsernameMoveToUserProfile}
          >
            @{user?.username}
          </PostPageCommentUser>
          <PostPageCommentText>{comment}</PostPageCommentText>
        </PostPageComment>
      )}
    </div>
  );
};
