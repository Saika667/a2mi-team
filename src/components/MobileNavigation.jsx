import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouseChimney, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavigationItemContainer, Text, ListButton, ListContainer, Choice } from "./Navigation";
import { useState } from "react";

const MobileNavigationContainer = styled.div`
    color: white;
    background-color: rgba(16, 21, 25, 0.9);
    font-size: 14px;
    position: fixed;
    top: 40px;
    right: 0;
    left: 0;
    z-index: 99;
    padding: 10px;
    font-weight: bold;
    font-size: 18px;

    svg {
      margin-left: 5px;
    }

    @media only screen and (max-width: 369px) {
        top: 0;
    }
`

const MenuButton = styled.div`
    text-align: center;

    svg {
        margin: 0 5px 0 0;
        color: #cb4278;
    }
`

const TextMenuButton = styled.span`
    text-transform: uppercase;
`

const NavigationContainer = styled.div`
    display: none;
    flex-direction: column;
    max-width: 720px;
    margin: auto;

    &.isVisible {
        display: flex;
    }
`

const NavigationItemContainerElt = styled(NavigationItemContainer)`

`

const TextElt = styled(Text)`
    font-weight: 200;
`

const ListButtonElt = styled(ListButton)`
    width: 100%;
`

const ListContainerElt = styled(ListContainer)`
    width: 100%;
    font-weight: 200;
`

const ChoiceElt = styled(Choice)`

`

function MobilleNavigation() {
    function toggleMenu(menuItemIndex) {
        if (menuItemShowed === menuItemIndex) {
            setMenuItemShowed(null);
        } else {
            setMenuItemShowed(menuItemIndex);
        }
    }
    const [menuItemShowed, setMenuItemShowed] = useState(6);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <MobileNavigationContainer>
            <MenuButton onClick={() => {setIsVisible(!isVisible)}}>
                <FontAwesomeIcon icon={faBars} />
                <TextMenuButton>Menu</TextMenuButton>
            </MenuButton>
            
            <NavigationContainer className={isVisible ? "isVisible" : ""}>
                <NavigationItemContainerElt onClick={() => {toggleMenu(0)}}>
                    <ListButtonElt className={menuItemShowed === 0 ? "active" : ""}>
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </ListButtonElt>
                </NavigationItemContainerElt>

                <NavigationItemContainerElt>
                    <ListButtonElt
                        className={menuItemShowed === 1 ? "active" : ""}
                        onClick={() => {toggleMenu(1)}}
                    >
                        <TextElt>Vente & Conseil</TextElt>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </ListButtonElt>

                    <ListContainerElt className={menuItemShowed === 1 ? "isVisible" : ""}>
                        <ChoiceElt>Vente & Conseil</ChoiceElt>
                        <ChoiceElt>Occasion</ChoiceElt>
                        <ChoiceElt>Les chantiers</ChoiceElt>
                    </ListContainerElt>
                </NavigationItemContainerElt>

                <NavigationItemContainerElt>
                    <ListButtonElt
                        className={menuItemShowed === 2 ? "active" : ""}
                        onClick={() => {toggleMenu(2)}}
                    >
                        <TextElt>Dépannage & Maintenance</TextElt>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </ListButtonElt>

                    <ListContainerElt className={menuItemShowed === 2 ? "isVisible" : ""}>
                        <ChoiceElt>Dépannage & Maintenance</ChoiceElt>
                        <ChoiceElt>Réparation informatique La Rochelle</ChoiceElt>
                        <ChoiceElt>Réparation informatique Niort</ChoiceElt>
                        <ChoiceElt>Réparation informatique Angers</ChoiceElt>
                    </ListContainerElt>
                </NavigationItemContainerElt>

                <NavigationItemContainerElt onClick={() => {toggleMenu(3)}}>
                    <ListButtonElt className={menuItemShowed === 3 ? "active" : ""}>
                        <TextElt>Formations & Compétences</TextElt>
                    </ListButtonElt>
                </NavigationItemContainerElt>

                <NavigationItemContainerElt onClick={() => {toggleMenu(4)}}>
                    <ListButtonElt className={menuItemShowed === 4 ? "active" : ""}>
                        <TextElt>Communication & Internet</TextElt>
                    </ListButtonElt>
                </NavigationItemContainerElt>

                <NavigationItemContainerElt onClick={() => {toggleMenu(5)}}>
                    <ListButtonElt className={menuItemShowed === 5 ? "active" : ""}>
                        <TextElt>Gestion Administrative</TextElt>
                    </ListButtonElt>
                </NavigationItemContainerElt>

                <NavigationItemContainerElt onClick={() => {toggleMenu(6)}}>
                    <ListButtonElt className={menuItemShowed === 6 ? "active" : ""}>
                        <TextElt>L'équipe</TextElt>
                    </ListButtonElt>
                </NavigationItemContainerElt>

                <NavigationItemContainerElt>
                    <ListButtonElt
                        className={menuItemShowed === 7 ? "active" : ""}
                        onClick={() => {toggleMenu(7)}}
                    >
                        <TextElt>Contact</TextElt>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </ListButtonElt>

                    <ListContainerElt className={menuItemShowed === 7 ? "isVisible" : ""}>
                        <ChoiceElt>Contact</ChoiceElt>
                        <ChoiceElt>Assitance</ChoiceElt>
                    </ListContainerElt>
                </NavigationItemContainerElt>
            </NavigationContainer>
        </MobileNavigationContainer>
    );
}

export default MobilleNavigation;