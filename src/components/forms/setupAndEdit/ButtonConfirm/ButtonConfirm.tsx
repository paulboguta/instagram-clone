import { Button } from "./ButtonConfirm.styles";

interface IButtonConfirmProps {
  onClick?(): void;
}

export const ButtonConfirm = ({ onClick }: IButtonConfirmProps) => {
  return (
    <Button id="button-confirm-setup" onClick={onClick}>
      Confirm
    </Button>
  );
};
