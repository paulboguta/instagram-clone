import { IAuthInputs } from "features/auth/auth.types";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import Logo from "../../../../assets/logo.png";
import * as Styled from "./Form.styles";
import { FormButton } from "./FormButton/FormButton";

interface IFormProps {
  text: string;
  onSubmit: SubmitHandler<IAuthInputs>;
  handleSubmit: UseFormHandleSubmit<{
    email: string;
    password: string;
  }>;
  children: React.ReactNode;
}

export const Form = ({
  children,
  text,
  onSubmit,
  handleSubmit,
}: IFormProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Img src={Logo} alt="Logo" />
        <Styled.Header>{text}</Styled.Header>
        {children}
        <FormButton text={text} type="submit" />
      </Styled.Form>
    </Styled.Wrapper>
  );
};
