import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../../services/firebase";
import {
  SearchStyled,
  Results,
  Button,
  Wrapper,
  ErrorMessage,
} from "./Search.styles";

export const Search = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | undefined>();
  const [resultClicked, setResultClicked] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
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
    setResultClicked((resultClicked) => !resultClicked);
    setInput("");
    setResult(undefined);
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    getData(input);

    setTimeout(() => {
      typeof result !== "string" && input.length > 0
        ? setError(true)
        : setError(false);
    }, 3000);
  }, [input]);

  return (
    <Wrapper>
      <SearchStyled
        placeholder="Search..."
        id="search-navbar"
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        value={input}
      />
      {typeof result === "string" && !resultClicked ? (
        <Results>
          <Button onClick={onClickResult} id="search-result">
            <img src={image} />
            <div>@{result}</div>
          </Button>
        </Results>
      ) : null}
      {error && (
        <ErrorMessage id="search-error">
          Wrong username, try another one.
        </ErrorMessage>
      )}
    </Wrapper>
  );
};
