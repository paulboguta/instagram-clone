import { ChangeEvent } from "react";
import * as Styled from "./TextField.styles";

interface ITextFieldProps {
  placeholder: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  value: string;
}

export const TextField = ({
  placeholder,
  onChange,
  value,
}: ITextFieldProps) => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperInput>
        <div>@</div>
        <hr />
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          id="input-username"
        />
      </Styled.WrapperInput>
      <p>Name must be 4-16 characters.</p>
    </Styled.Wrapper>
  );
};
