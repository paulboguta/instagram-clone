import { ChangeEvent } from "react";
import { WrapperInput, Wrapper } from "./TextField.styles";

interface ITextFieldProps {
  placeholder?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const TextField = ({ placeholder, onChange }: ITextFieldProps) => {
  return (
    <Wrapper>
      <WrapperInput>
        <div>@</div>
        <hr />
        <input
          role="input"
          placeholder={placeholder}
          onChange={onChange}
          id="input-username"
        />
      </WrapperInput>
      <p>Name must be 4-16 characters.</p>
    </Wrapper>
  );
};
