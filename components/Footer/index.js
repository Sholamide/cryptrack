import {
  FooterContainer,
  FooterWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialMediaLogo href="/">
              <a> Lordie</a>
            </SocialMediaLogo>
            <WebsiteRights>
              Lordie © {new Date().getFullYear()} All rights reserved. Handfully
              crafted using NextJS ⚛️ with ❤️
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink
                href="https://web.facebook.com/olarotz"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.instagram.com/o_l_a_m_i_d_e/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://github.com/Sholamide"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.linkedin.com/in/sholuade-olamide-148159174/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://twitter.com/lordolamider"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;
