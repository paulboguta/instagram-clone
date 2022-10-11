import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Button } from "./LikesModal.styles";
import { LikesModalContext } from "../../../contexts/LikesModalContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";

export const LikesModalButton = ({ uid }: any) => {
  const navigate = useNavigate();
  const id = window.location.pathname.slice(6);
  const { onClickHideLikesModal } = useContext(LikesModalContext);
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");

  const getUserData = async () => {
    const userRef = doc(db, "users", uid);
    const userData = await getDoc(userRef);
    setUsername(userData.data()!.username);
    setImg(userData.data()!.profilePic);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    if (event.currentTarget.id === id) {
      onClickHideLikesModal();
    } else {
      navigate(`/user/${event.currentTarget.id}`);
      onClickHideLikesModal();
    }
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={uid}>
      <img src={img} />
      <div>@{username}</div>
    </Button>
  );
};
