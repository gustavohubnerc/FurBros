import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundRegister from '../images/dog6.jpg'
import { useState } from 'react';

export default function NewPetPage(){
    const navigate = useNavigate();

    const [petName, setPetName] = useState("");
    const [about, setAbout] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/newpet`, {
                petName,
                about,
                image
            })
            navigate("/profile");
        } catch (error) {
            console.error('Erro ao cadastrar novo pet:', error);
        }
    }
    return(
        <PageContainer>
            <Forms>
                <h1>Adicionar novo pet</h1>
                <label htmlFor="petName">
                    <input
                        onChange={(e) => setPetName(e.target.value)}
                        value={petName}
                        type="text"
                        placeholder="Nome do pet"
                        required
                    ></input>
                </label>
                <label htmlFor="about">
                    <input
                        onChange={(e) => setAbout(e.target.value)}
                        value={about}
                        type="text"
                        placeholder="Descrição"
                        required
                    ></input>
                </label>
                <label htmlFor="image">
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        type="text"
                        placeholder="URL da imagem"
                        required
                    ></input>
                </label>
                <button type="submit" onClick={handleSubmit}>
                    Finalizar cadastro
                </button>
            </Forms>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundRegister});
    background-size: cover;
    background-position: center;
`

const Forms = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        margin: 5px;
        font-family: 'Poppins', sans-serif;
    }
    input {
        margin: 5px;
        width: 300px;
        height: 30px;
        padding: 10px;
        border-radius: 25px;
        border: none;
        font-family: 'Poppins', sans-serif;
    }
    button {
        margin: 10px;
        width: 300px;
        height: 50px;
        border-radius: 25px;
        background-color: #f3b65b;
        border: none;
        font-family: 'Poppins', sans-serif;
    }    

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 40px;
        color: #f3b65b;
        text-shadow: 2px 2px 2px #000000;
    }
`;
