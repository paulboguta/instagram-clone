import { Button } from "./FollowersModal.styles";
interface IFollowersModalButtonProps {
  img: string;
  username: string;
  onClick?(): void;
}

export const FollowersModalButton = ({
  img,
  username,
  onClick,
}: IFollowersModalButtonProps) => {
  return (
    <Button onClick={onClick}>
      <img src={img} />
      <div>@{username}</div>
    </Button>
  );
};
