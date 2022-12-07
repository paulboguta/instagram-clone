import styled from "styled-components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks/hooks";
import {
  selectCurrentUser,
  setTheme,
} from "user/store/slices/currentUserSlice";
import { ReactComponent as IconDark } from "../../../../assets/icons/dark.svg";
import { ReactComponent as IconLight } from "../../../../assets/icons/light.svg";

interface ICircleStyle {
  toggle: string;
}
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 104px;
  height: 24px;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const WrapperToggle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 48px;
  height: 24px;
  border-radius: 14.5px;
  background-color: #5a6069;
`;

const Circle = styled.div<ICircleStyle>`
  background-color: ${(props) => props.toggle};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const ToggleDarkMode = () => {
  const { theme } = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(setTheme(theme === "themeLight" ? "themeDark" : "themeLight"));
  };

  const toggle = theme === "themeLight" ? "#fff" : "transparent";
  const toggle2 = theme === "themeDark" ? "#fff" : "transparent";

  return (
    <Button onClick={clickHandler}>
      <IconDark />
      <WrapperToggle>
        <Circle toggle={toggle2} />
        <Circle toggle={toggle} />
      </WrapperToggle>
      <IconLight />
    </Button>
  );
};
