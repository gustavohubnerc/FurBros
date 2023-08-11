import { useNavigate } from "react-router-dom"
import { useState, useContext } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import backgroundLogin from '../images/dog6.jpg'
import AuthContext from "../contexts/AuthContext"


export default function LoginPage() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const { setToken } = authContext;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();

         try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/signin`, {
                email,
                password
            });

            const token = response.data.token;
            setToken(token);
            localStorage.setItem("token", token);

            navigate("/"); 
        } catch (error) {
            if (error.response.status === 401) {
                alert("Credenciais inválidas. Por favor, tente novamente.");
                return;
            } 
            if(error.response.status === 422){
                alert("Dados em formato invalido!");
                return;
            }
            if(error.response.status === 404){
                alert("O e-mail informado não está cadastrado");
                return;
            }
            else {
                alert('Erro ao fazer login. Por favor, tente novamente.');
            }
        }
    }

    return (
        <LoginContainer>
            <Forms>
                <h1>Login</h1>
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
                <button type="submit" onClick={handleSignIn}>
                    Entrar
                </button>
            </Forms>
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundLogin});
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
    input::placeholder {
        padding-left: 10px;
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
