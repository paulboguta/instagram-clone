import { Wrapper } from "./ProfilePost.styles";

interface IProfilePostProps {
  src: string;
}

export const ProfilePost = ({ src }: IProfilePostProps) => {
  return (
    <Wrapper>
      <img src={src} />
    </Wrapper>
  );
};
