import styled from "styled-components";

interface IFormLinkProps {
  text: string;
  linkText: string;
  link: string;
}

const Text = styled.div`
  color: lightskyblue;
`;

const Link = styled.a`
  color: lightskyblue;
`;

export const FormLink = ({ text, link, linkText }: IFormLinkProps) => {
  return (
    <Text>
      {text} <Link href={link}>{linkText}</Link>
    </Text>
  );
};
