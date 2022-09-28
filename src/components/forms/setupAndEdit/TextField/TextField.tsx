import { ChangeEvent } from "react";
import { WrapperInput, Wrapper } from "./TextField.styles";

interface ITextFieldProps {
  placeholder?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

export const TextField = ({
  placeholder,
  onChange,
  value,
}: ITextFieldProps) => {
  return (
    <Wrapper>
      <WrapperInput>
        <div>@</div>
        <hr />
        <input
          role="input"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          id="input-username"
        />
      </WrapperInput>
      <p>Name must be 4-16 characters.</p>
    </Wrapper>
  );
};
