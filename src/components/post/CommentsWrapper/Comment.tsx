import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/store";
import { IUser } from "types/user.types";
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

  const { profilePic, username } = useSelector((state: RootState) =>
    state.rootReducer.usersReducer.users.find((user: IUser) => {
      return user.uid === uid;
    })
  );

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
            @{username}
          </CommentUser>
          <CommentText>{comment}</CommentText>
        </CommentStyled>
      ) : (
        <PostPageComment>
          <PostPageCommentUserPic src={profilePic} />
          <PostPageCommentUser
            id={uid}
            onClick={onClickUsernameMoveToUserProfile}
          >
            @{username}
          </PostPageCommentUser>
          <PostPageCommentText>{comment}</PostPageCommentText>
        </PostPageComment>
      )}
    </div>
  );
};
