import styled from "styled-components";
import Link from "next/link";

export const FooterContainer = styled.footer`
  background: #000;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 1100px;
  align-items: center;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialMediaLogo = styled(Link)`
  justify-self: start;
  align-items: center;
  color: #f3f3f3;
  display: flex;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const WebsiteRights = styled.small`
  color: #f3f3f3;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const SocialIcons = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 240px;
`;

export const SocialIconsLink = styled.a`
  color: #f3f3f3;
  font-size: 24px;
  &:hover {
    color: #800080;
  }
`;
