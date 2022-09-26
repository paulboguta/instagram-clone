import {
  Wrapper,
  ButtonPreview,
  WrapperForm,
  WrapperMemojis,
  ButtonConfirm,
  Button,
} from "./ProfilePicForm.styles";
import { Memojis } from "../../../assets/memoji";
import { MemojisPreview } from "../../../assets/memoji";
import { useState } from "react";

interface IProfilePicFormProps {
  onClickPic?(event: React.MouseEvent<HTMLButtonElement>): void;
  profilepic?: string | undefined;
}

export const ProfilePicForm = ({
  onClickPic,
  profilepic,
}: IProfilePicFormProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [picChosen, setPicChosen] = useState<boolean>(false);

  const onClick = () => {
    setClicked(true);
    setPicChosen(false);
  };

  const onConfirm = () => {
    setClicked(false);
    setPicChosen(true);
  };

  return (
    <Wrapper>
      {!picChosen ? (
        <ButtonPreview onClick={onClick} id="button-preview">
          {MemojisPreview.map((memoji, index: number) => {
            return <img src={memoji} key={index} />;
          })}
        </ButtonPreview>
      ) : (
        <ButtonPreview onClick={onClick}>
          <img src={profilepic} />
        </ButtonPreview>
      )}
      <p>Select your profile picture</p>
      {clicked && (
        <WrapperForm>
          <WrapperMemojis data-test-target="component-name:WrapperMemojis">
            {Memojis.map((memoji, key: number) => {
              return (
                <Button key={key} onClick={onClickPic} id="button-memoji">
                  <img src={memoji} />
                </Button>
              );
            })}
          </WrapperMemojis>
          <ButtonConfirm onClick={onConfirm} id="button-confirm-memoji">
            Confirm
          </ButtonConfirm>
        </WrapperForm>
      )}
    </Wrapper>
  );
};
