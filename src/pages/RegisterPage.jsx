import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import backgroundRegister from '../images/dog6.jpg'

export default function RegisterPage() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();

        const saveData = {
            name,
            phone,
            cpf,
            email,
            password,
            confirmPassword
        }

        try {
            axios.post(`${import.meta.env.VITE_API_URL}/signup`, saveData);
            console.log('Cliente cadastrado com sucesso!');
            navigate("/signin");
        } catch {
            if(error.response && error.response.status === 409){
                alert("Ja existe um usuario cadastrado com esses dados");
                return;
            } else {
                alert('Erro ao cadastrar. Por favor, tente novamente.');
            }
        }
    }

    return (
        <RegisterContainer>
            <Forms>
                <h1>Cadastro</h1>
                <label htmlFor="name">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Nome"
                    required
                ></input>
                </label>
                <label htmlFor="phone">
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="number"
                    placeholder="Telefone"
                    required
                ></input>
                </label>
                <label htmlFor="CPF">
                <input
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                    type="number"
                    placeholder="CPF"
                    required
                ></input>
                </label>
                <label htmlFor="email">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                ></input>
                </label>
                <label htmlFor="password">
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Senha"
                    required
                ></input>
                </label>
                <label htmlFor="confirmPassword">
                <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                    placeholder="Confirme sua senha"
                    required
                ></input>
                </label>
                <button type="submit" onClick={handleSignUp}>
                Cadastrar
                </button>
            </Forms>
            
        </RegisterContainer>
    );
}

const RegisterContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundRegister});
    background-size: cover;
    background-position: center;
`;

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
`