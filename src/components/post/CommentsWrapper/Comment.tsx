import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../services/firebase";
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
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  const getUsersData = async () => {
    const userRef = doc(db, "users", uid);
    const userData = await getDoc(userRef);
    setUsername(userData.data()!.username);
    setProfilePic(userData.data()!.profilePic);
  };

  useEffect(() => {
    getUsersData();
  }, []);

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
