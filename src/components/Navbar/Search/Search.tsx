import { SearchStyled, Results, Button } from "./Search.styles";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";

interface ISearchProps {
  onResultClick(): void;
}

export const Search = ({ onResultClick }: ISearchProps) => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | undefined>();
  const [resultClicked, setResultClicked] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();

  const getData = async (input: string) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (input === doc.data().username) {
        setResult(doc.data().username);
        setImage(doc.data().profilePic);
        setId(doc.data().userID);
        console.log(doc.data().username);
      }
    });
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setResultClicked(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      setResult(undefined);
    }
  };

  const onClickResult = () => {
    onResultClick();
    setResultClicked((resultClicked) => !resultClicked);
    setInput("");
    setResult(undefined);
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    getData(input);
  }, [input]);

  return (
    <div>
      <SearchStyled
        placeholder="Search..."
        id="#search-navbar"
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
      />
      {typeof result == "string" && !resultClicked ? (
        <Results>
          <Button onClick={onClickResult}>
            <img src={image} />
            <div>@{result}</div>
          </Button>
        </Results>
      ) : null}
    </div>
  );
};
