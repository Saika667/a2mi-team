import styled from "styled-components";
import { SocialNetworkButton } from "./Headband";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import echoMer from "../assets/echo-mer.png"

const FooterContainer = styled.footer`
    background-color: #cb4278;
    padding: 20px;
    position: relative;
    z-index: 99;
`

const FooterWrapper = styled.div`
    width: 1130px;
    padding-left: 13px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    box-sizing: border-box;

    @media only screen and (max-width: 992px) {
        width: 100%;
        flex-direction: column;
    }
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 100%;
    }
`

const Container = styled.div`
    display: flex;

    &.menu {
        flex-direction: column;
        justify-content: center;
    }

    &.social {
        align-items: center;
        @media only screen and (max-width: 992px) {
            justify-content: flex-end;
        }
    }
`

const MenuContainer = styled.div`
    & :not(:last-child):after {
        content: ' | ';
        
    }
`

const MenuItem = styled.span`
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;

    &.whiteToBlack {
        color: white;

        &:hover {
            color: black;
            &:after {
                color: white;
            }
        }
    }

    &.blackToWhite {
        color: black;

        &:hover {
            color: white;
            &:after {
                color: black;
            }
        }
    }
`

const Link = styled.a`

`

const Img = styled.img`
    height: 50px;
`

function Footer() {
  return (
    <FooterContainer>
        <FooterWrapper>
            <Container className="menu">
                <MenuContainer>
                    <MenuItem className="whiteToBlack">Charte RSE</MenuItem>
                    <MenuItem className="whiteToBlack">Conditions générale de vente</MenuItem>
                    <MenuItem className="whiteToBlack">Partenaires</MenuItem>
                    <MenuItem className="whiteToBlack">Extranet</MenuItem>
                </MenuContainer>
                <MenuContainer>
                    <MenuItem className="blackToWhite">Mentions légales</MenuItem>
                    <MenuItem className="blackToWhite">Gestion des coockies</MenuItem>
                    <MenuItem className="blackToWhite">Copyright 2016 PlusCom & A2MI</MenuItem>
                </MenuContainer>
            </Container>

            <Container className="social">
                <SocialNetworkButton href="https://www.facebook.com/A2MI17/" target="_blank" title="Facebook A2MI Informatique">
                    <FontAwesomeIcon icon={faFacebookF} />
                </SocialNetworkButton>
                <SocialNetworkButton href="https://www.twitter.com/A2MI17/" target="_blank" title="Twitter A2MI Informatique">
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialNetworkButton>
                <SocialNetworkButton href="https://www.linkedin.com/in/michel-fouillen-27576392" target="_blank" title="Linkedin A2MI Informatique">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialNetworkButton>
                <SocialNetworkButton href="https://www.youtube.com/channel/UCDPN24U3r69L7sR2RJpPE2A" target="_blank" title="Youtube A2MI Informatique">
                    <FontAwesomeIcon icon={faYoutube} />
                </SocialNetworkButton>
                <Link href="http://www.echo-mer.com/actualite/" title="Echo Mer">
                    <Img src={echoMer} alt="Logo de l'association environnementale Echo-mer"/>
                </Link>
            </Container>
        </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;