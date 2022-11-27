import { useState } from "react";
import {
  Wrapper,
  ButtonPreview,
  WrapperForm,
  WrapperMemojis,
  ButtonConfirm,
  Button,
} from "./ProfilePicForm.styles";
import { Memojis, MemojisPreview } from "../../../../assets/memoji/index";

interface IProfilePicFormProps {
  onClickPic(event: React.MouseEvent<HTMLButtonElement>): void;
  profilepic: string | undefined;
}

export const ProfilePicForm = ({
  onClickPic,
  profilepic,
}: IProfilePicFormProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const onClickChoose = () => {
    setClicked(true);
  };

  const onClickConfirm = () => {
    setClicked(false);
  };
  return (
    <Wrapper>
      {!profilepic!.length ? (
        <ButtonPreview onClick={onClickChoose} id="button-preview">
          {MemojisPreview.map((memoji) => {
            return <img src={memoji} key={memoji} alt="memoji" />;
          })}
        </ButtonPreview>
      ) : (
        <ButtonPreview onClick={onClickChoose}>
          <img src={profilepic} alt="chosen memoji" />
        </ButtonPreview>
      )}
      <p>Select your profile picture</p>
      {clicked && (
        <WrapperForm>
          <WrapperMemojis data-test-target="component-name:WrapperMemojis">
            {Memojis.map((memoji) => {
              return (
                <Button key={memoji} onClick={onClickPic} id="button-memoji">
                  <img src={memoji} alt="memoji" />
                </Button>
              );
            })}
          </WrapperMemojis>
          <ButtonConfirm onClick={onClickConfirm} id="button-confirm-memoji">
            Confirm
          </ButtonConfirm>
        </WrapperForm>
      )}
    </Wrapper>
  );
};
