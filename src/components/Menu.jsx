import styled from "styled-components"
import logo from "../images/FurBros.png"
import { Link } from "react-router-dom"

export default function FixedMenu() {
    const redirectToHome = () => {
        window.location.href = '/';
    };

    return (
        <Menu>
            <Content onClick={redirectToHome}>
                <img alt="logo" src={logo}/>
            </Content>
            <Content>
                <button><Link to="/newpet">Novo pet</Link></button>
            </Content>  
            <Content>
                <button><Link to="/profile">Meu perfil</Link></button>
            </Content>            
        </Menu>
    )
}

const Menu = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #F4F0EB;
`

const Content = styled.div`
    display: flex;

    button {
        border: 3px solid #f3b65b;
        border-radius: 25px;
        margin: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        color: #f3b65b;
        background-color: transparent;
        padding: 10px;
        text-decoration: none;
    }
    a {
        text-decoration: none;
        color: #f3b65b;
    }
` 
