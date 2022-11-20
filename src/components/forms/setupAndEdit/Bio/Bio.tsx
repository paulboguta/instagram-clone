import { ChangeEvent } from "react";
import { Wrapper } from "./Bio.styles";

interface IBioProps {
  onChange?(event: ChangeEvent<HTMLTextAreaElement>): void;
  text?: string;
}

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
