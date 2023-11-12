import styled from "styled-components";
import banner from "../assets/banner.jpg";
import logo from "../assets/logo.png";
import circle from "../assets/cercle-slider.png";

const BannerContainer = styled.div`
    background-image: url(${banner});
    background-position: center;
    max-height: 200px;
    min-height: 100px;
    height: 15vw;
    overflow: hidden;
    position: relative;

    @media only screen and (max-width: 369px) {
        display: none;
    }
`

const BannerLogo = styled.div`
    background: url(${circle}) center right no-repeat;
    background-size: cover;
    height: 100%;
    width: 33%;
    margin-left: 16%;
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 1200px) {
        width: 40%;
    }
`

const EnterpriseLogo = styled.img`
    display: block;
    width: 68%;
    margin: 0 auto;
    height: fit-content;

    @media only screen and (max-width: 1200px) {
        max-width: 65%;
    }
`

function Banner() {
  return (
    <BannerContainer>
        <BannerLogo>
            <EnterpriseLogo src={logo} alt="Logo de l'entreprise"/>
        </BannerLogo>
    </BannerContainer>
  );
}

export default Banner;
