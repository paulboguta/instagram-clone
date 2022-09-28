import { Navbar } from "../../components/Navbar/Navbar";

interface IFeedProps {
  onProfileClick(): void;
}

export const Feed = ({ onProfileClick }: IFeedProps) => {
  return (
    <div>
      <Navbar onProfileClick={onProfileClick} />
    </div>
  );
};
