import styled from "styled-components";
import { ButtonEditProfile } from "./ButtonEditProfile";
import { ButtonAddPostFromProfile } from "./ButtonAddPostFromProfile";
import { useNavigate } from "react-router-dom";

export const ProfileButtons = () => {
  const navigate = useNavigate();

  const onClickEditProfile = () => {
    navigate("/edit");
  };
  return (
    <Wrapper>
      <ButtonEditProfile onClick={onClickEditProfile} />
      <ButtonAddPostFromProfile />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    margin-right: 90px;
    gap: 20px;
  }
`;
