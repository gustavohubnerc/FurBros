import styled from "styled-components"
import logo from "../images/FurBros.png"

export default function FixedMenu() {

    return (
        <Menu>
            <ImageText>
                <img src={logo}></img>
            </ImageText>
            <ImageText>
                <button>Novo pet</button>
            </ImageText>  
            <ImageText>
                <button>Meu perfil</button>
            </ImageText>            
        </Menu>
    )
}

const Menu = styled.div`
    height: 110px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ImageText = styled.div`
    height: 85px;
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
    }
` 
