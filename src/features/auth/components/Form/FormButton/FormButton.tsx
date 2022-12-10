import * as Styled from "./FormButton.styles";

interface IFormButtonProps {
  text: string;
  type: "submit";
}

export const FormButton = ({ text, type }: IFormButtonProps) => {
  return <Styled.Button type={type}>{text}</Styled.Button>;
};
