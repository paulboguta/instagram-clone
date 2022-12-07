import styled from "styled-components";

interface IProfileImgProps {
  profileImg: string;
}

const Img = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-color: #dcbae7;
  -webkit-box-shadow: 0px 0px 36px 0px rgba(220, 186, 231, 1);
  -moz-box-shadow: 0px 0px 36px 0px rgba(220, 186, 231, 1);
  box-shadow: 0px 0px 36px 0px rgba(220, 186, 231, 1);
`;

export const ProfileImg = ({ profileImg }: IProfileImgProps) => {
  return <Img src={profileImg} />;
};
