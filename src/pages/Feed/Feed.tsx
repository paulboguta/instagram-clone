import { Navbar } from "../../components/Navbar/Navbar";

interface IFeedProps {
  onProfileClick(): void;
  onResultClick(): void;
}

export const Feed = ({ onProfileClick, onResultClick }: IFeedProps) => {
  return (
    <div>
      <Navbar onProfileClick={onProfileClick} onResultClick={onResultClick} />
    </div>
  );
};
