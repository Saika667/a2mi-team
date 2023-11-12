import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavigationContainer = styled.div`
    color: white;
    background-color: rgba(16, 21, 25, 0.9);
    font-size: 14px;
    position: fixed;
    top: 40px;
    right: 0;
    left: 0;
    z-index: 99;

    @media only screen and (max-width: 1200px) {
        display: none;
    }
`

const NavigationWrapper = styled.div`
    width: 1170px;
    display: flex;
    justify-content: center;
    margin: auto;
    user-select: none;
    /* Alignement avec menu headband */
    padding-left: 10px;
`

export const NavigationItemContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
`

export const Text = styled.span`

`

export const ListButton = styled.div`
    padding: 10px;
    border-bottom: 5px solid transparent;
    transition: all .3s;

    &:hover, &.active {
        color: #cb4278;
        border-bottom: 5px solid #cb4278;
    }

    svg {
        padding-left: 5px;
    }
`

export const ListContainer = styled.div`
    background-color: #cb4278;
    position: absolute;
    top: 46px;
    left: 0;
    display: none; 
    flex-direction: column;
    z-index: 3;

    &.isVisible {
        display: flex;
    }
`

export const Choice = styled.span`
    padding: 8px 20px;
    white-space: nowrap;
    border-bottom: solid 5px transparent;
    transition: all .3s;
    &:hover {
        color: black;
        border-bottom: solid 5px black;
    }
`

function Navigation() {
    function toggleMenu(menuItemIndex) {
        if (menuItemShowed === menuItemIndex) {
            setMenuItemShowed(null);
        } else {
            setMenuItemShowed(menuItemIndex);
        }
    }

    const [menuItemShowed, setMenuItemShowed] = useState(6);
  return (
    <NavigationContainer>
        <NavigationWrapper>
            <NavigationItemContainer onClick={() => {toggleMenu(0)}}>
                <ListButton className={menuItemShowed === 0 ? "active" : ""}>
                    <FontAwesomeIcon icon={faHouseChimney} />
                </ListButton>
            </NavigationItemContainer>

            <NavigationItemContainer>
                <ListButton
                    className={menuItemShowed === 1 ? "active" : ""}
                    onClick={() => {toggleMenu(1)}}
                >
                    <Text>Vente & Conseil</Text>
                    <FontAwesomeIcon icon={faCaretDown} />
                </ListButton>

                <ListContainer className={menuItemShowed === 1 ? "isVisible" : ""}>
                    <Choice>Vente & Conseil</Choice>
                    <Choice>Occasion</Choice>
                    <Choice>Les chantiers</Choice>
                </ListContainer>
            </NavigationItemContainer>

            <NavigationItemContainer>
                <ListButton
                    className={menuItemShowed === 2 ? "active" : ""}
                    onClick={() => {toggleMenu(2)}}
                >
                    <Text>Dépannage & Maintenance</Text>
                    <FontAwesomeIcon icon={faCaretDown} />
                </ListButton>

                <ListContainer className={menuItemShowed === 2 ? "isVisible" : ""}>
                    <Choice>Dépannage & Maintenance</Choice>
                    <Choice>Réparation informatique La Rochelle</Choice>
                    <Choice>Réparation informatique Niort</Choice>
                    <Choice>Réparation informatique Angers</Choice>
                </ListContainer>
            </NavigationItemContainer>

            <NavigationItemContainer onClick={() => {toggleMenu(3)}}>
                <ListButton className={menuItemShowed === 3 ? "active" : ""}>
                    <Text>Formations & Compétences</Text>
                </ListButton>
            </NavigationItemContainer>

            <NavigationItemContainer onClick={() => {toggleMenu(4)}}>
                <ListButton className={menuItemShowed === 4 ? "active" : ""}>
                    <Text>Communication & Internet</Text>
                </ListButton>
            </NavigationItemContainer>

            <NavigationItemContainer onClick={() => {toggleMenu(5)}}>
                <ListButton className={menuItemShowed === 5 ? "active" : ""}>
                    <Text>Gestion Administrative</Text>
                </ListButton>
            </NavigationItemContainer>

            <NavigationItemContainer onClick={() => {toggleMenu(6)}}>
                <ListButton className={menuItemShowed === 6 ? "active" : ""}>
                    <Text>L'équipe</Text>
                </ListButton>
            </NavigationItemContainer>

            <NavigationItemContainer>
                <ListButton
                    className={menuItemShowed === 7 ? "active" : ""}
                    onClick={() => {toggleMenu(7)}}
                >
                    <Text>Contact</Text>
                    <FontAwesomeIcon icon={faCaretDown} />
                </ListButton>

                <ListContainer className={menuItemShowed === 7 ? "isVisible" : ""}>
                    <Choice>Contact</Choice>
                    <Choice>Assitance</Choice>
                </ListContainer>
            </NavigationItemContainer>
        </NavigationWrapper>
    </NavigationContainer>
  );
}

export default Navigation;