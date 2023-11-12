import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const HeadbandContainer = styled.div`
    background-color: #cb4278;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;

    @media only screen and (max-width: 369px) {
        display: none;
    }
`

const Wrapper = styled.div`
    width: 1170px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    box-sizing: border-box;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        padding: 0 20px;
    }
`

const Container = styled.div`
    display: flex;
    margin: 0.5em 1em;
`

const Content = styled.div`
    &.location {
        @media only screen and (max-width: 768px) {
            display: none;
        }
    }

    svg {
        font-size: 0.8em;
        margin: 0 .4em 0 .8em;
    }
`

const Text = styled.span`
    color: white;
    font-size: .8em;
`

export const SocialNetworkButton = styled.a`
    color: black;
    margin: 0 .4em;
    svg {
        font-size: 1.2em;
    }
    &:hover {
        svg {
            color: white;
        }
    }
    &.location {
        @media only screen and (min-width: 769px) {
            display: none;
        }
    }
`

function Headband() {
  return (
    <HeadbandContainer>
        <Wrapper>
            <Container>
                <Content>
                    <FontAwesomeIcon icon={faPhone} />
                    <Text>09 51 52 42 86</Text>
                </Content>
                <Content className="location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <Text>10/14, rue Jean PERRIN, 17000 La Rochelle</Text>
                </Content>
            </Container>
            <Container>
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
                <SocialNetworkButton className="location" href="https://www.google.fr/maps/place/A2MI+INFORMATIQUE/@46.141018,-1.1621528,16.25z/data=!4m5!3m4!1s0x480153ee9b243557:0x6e59e490e51668af!8m2!3d46.141165!4d-1.159604" target="_blank" title="Localisation de l'agence A2MI Informatique.">
                    <FontAwesomeIcon icon={faLocationDot} />
                </SocialNetworkButton>
            </Container>
        </Wrapper>
    </HeadbandContainer>
  );
}

export default Headband;