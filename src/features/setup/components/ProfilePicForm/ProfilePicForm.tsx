import { useState } from "react";
import * as Styled from "./ProfilePicForm.styles";
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
    <Styled.Wrapper>
      {!profilepic!.length ? (
        <Styled.ButtonPreview onClick={onClickChoose} id="button-preview">
          {MemojisPreview.map((memoji) => {
            return <img src={memoji} key={memoji} alt="memoji" />;
          })}
        </Styled.ButtonPreview>
      ) : (
        <Styled.ButtonPreview onClick={onClickChoose}>
          <img src={profilepic} alt="chosen memoji" />
        </Styled.ButtonPreview>
      )}
      <p>Select your profile picture</p>
      {clicked && (
        <Styled.WrapperForm>
          <Styled.WrapperMemojis>
            {Memojis.map((memoji) => {
              return (
                <Styled.Button key={memoji} onClick={onClickPic}>
                  <img src={memoji} alt="memoji" />
                </Styled.Button>
              );
            })}
          </Styled.WrapperMemojis>
          <Styled.ButtonConfirm onClick={onClickConfirm}>
            Confirm
          </Styled.ButtonConfirm>
        </Styled.WrapperForm>
      )}
    </Styled.Wrapper>
  );
};
