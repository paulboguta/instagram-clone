import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestSearchUsers } from "utils/search.utils";
import { useSelector } from "react-redux";
import { IUser } from "types/user.types";
import { selectUsers } from "user/store/slices/usersSlice";
import { SearchStyled, Results, Button, Wrapper } from "./Search.styles";

export const Search = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<IUser[]>([]);
  const navigate = useNavigate();

  const users = useSelector(selectUsers);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setResult(requestSearchUsers(event.target.value, users));
  };

  const onClickResult = (uid: string) => {
    setInput("");
    navigate(`/user/${uid}`);
  };

  return (
    <Wrapper>
      <SearchStyled
        placeholder="Search..."
        id="search-navbar"
        onChange={onChangeInput}
        value={input}
        autoComplete="off"
      />
      {input.length ? (
        <Results>
          {/* display max 5 users while searching */}
          {result.slice(0, 5).map((user: IUser) => {
            return (
              <Button
                onClick={() => onClickResult(user.uid)}
                id="search-result"
                key={user.uid}
              >
                <img src={user.profilePic} alt="profile pic" />
                <div>@{user.username}</div>
              </Button>
            );
          })}
        </Results>
      ) : null}
    </Wrapper>
  );
};
