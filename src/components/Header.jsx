import styled from "styled-components";
import Headband from "./Headband";
import Navigation from "./Navigation";
import Banner from "./Banner";
import MobilleNavigation from "./MobileNavigation";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HeaderContainer = styled.div`
    position: relative;
    z-index: 99;
    padding-top: 86px;

    @media only screen and (max-width: 369px) {
        padding-top: 46px;
    }
`

function Header() {
    const { width } = useWindowDimensions();
    const isDesktop = width > 1200;
  return (
    <HeaderContainer>
        <Headband />
        { isDesktop ? <Navigation /> : <MobilleNavigation /> }
        <Banner />
    </HeaderContainer>
  );
}

export default Header;