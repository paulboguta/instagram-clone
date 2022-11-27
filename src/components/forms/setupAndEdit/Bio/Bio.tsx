import { ChangeEvent } from "react";
import styled from "styled-components";

interface IBioProps {
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void;
  text: string;
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};

  textarea {
    resize: none;
    outline: none;
    border: ${(props) => props.theme.border1};
    border-radius: 15px;
    padding: 6px;
    width: 400px;
    height: 100px;
    font-family: "Helveltica", sans-serif;
    color: ${(props) => props.theme.fontPrimary};
    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  p {
    color: ${(props) => props.theme.fontSecondary};
    font-size: 12px;
  }
`;

export const Bio = ({ onChange, text }: IBioProps) => {
  return (
    <Wrapper>
      <textarea
        placeholder="Your bio..."
        id="setup-bio"
        onChange={onChange}
        value={text}
      />
      <p>Bio has to be maximmum 120 characters.</p>
      <p>You can set up this later the default bio will be created</p>
    </Wrapper>
  );
};
