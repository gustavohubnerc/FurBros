import styled from "styled-components";
import logo from "../images/FurBros.png";
import { Link } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import { pawOutline, personOutline } from 'ionicons/icons';


export default function FixedMenu() {
    const redirectToHome = () => {
        window.location.href = '/';
    };

    return (
        <Menu>
            <LogoContent onClick={redirectToHome}>
                <LogoImage src={logo} alt="logo" />
            </LogoContent>
            <NavItem>
                <NavLink to="/newpet">
                    <IconWrapper>
                        <IonIcon icon={pawOutline} />
                    </IconWrapper>
                    Novo pet
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/profile">
                    <IconWrapper>
                        <IonIcon icon={personOutline} />
                    </IconWrapper>
                    Meu perfil
                </NavLink>
            </NavItem>
        </Menu>
    );
}

const IconWrapper = styled.span`
    margin-right: 5px;
    margin-top: 20px;
    font-size: 20px;
`;

const Menu = styled.div`
    height: 80px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2c3e50;
    padding: 0 20px;
`;

const LogoContent = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const LogoImage = styled.img`
    height: 60px;
    width: auto;
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #f4f0eb;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #34495e;
    }
`;
