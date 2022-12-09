import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestSearchUsers } from "features/search/utils/search.utils";
import { useSelector } from "react-redux";
import { IUser } from "features/user/types";
import { selectUsers } from "features/user/store/usersSlice";
import * as Styled from "./Search.styles";

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
    <Styled.Wrapper>
      <Styled.SearchStyled
        placeholder="Search..."
        id="search-navbar"
        onChange={onChangeInput}
        value={input}
        autoComplete="off"
      />
      {input.length ? (
        <Styled.Results>
          {/* display max 5 users while searching */}
          {result.slice(0, 5).map((user: IUser) => {
            return (
              <Styled.Button
                onClick={() => onClickResult(user.uid)}
                id="search-result"
                key={user.uid}
              >
                <img src={user.profilePic} alt="profile pic" />
                <div>@{user.username}</div>
              </Styled.Button>
            );
          })}
        </Styled.Results>
      ) : null}
    </Styled.Wrapper>
  );
};
