import * as Styled from "./FormInput.styles";

interface IFormInput {
  helperText: string;
  helperErrorText: string | null | undefined;
  value: string;
  onChange: () => void;
  type: string;
}

export const FormInput = ({
  helperText,
  helperErrorText,
  value,
  type,
  onChange,
}: IFormInput) => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperInput>
        <Styled.HelperText>{helperText}</Styled.HelperText>
        <Styled.Input type={type} onChange={onChange} value={value} />
      </Styled.WrapperInput>
      {helperErrorText ? (
        <Styled.HelperErrorText>{helperErrorText}</Styled.HelperErrorText>
      ) : null}
    </Styled.Wrapper>
  );
};
