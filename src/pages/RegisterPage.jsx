import React from 'react'
import useForm from '../services/useForm'
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'
import backgroundRegister from '../images/register.jpg'

export default function RegisterPage() {
    const { formData, changeFormData } = useForm({
        nome: "",
        email: "",
        cpf: "",
        telefone: "",
        senha: "",
        confirmarSenha: ""
    });

    if (!formData) {
        return null;
      }

    function useRegister() {
        const navigate = useNavigate();
      
        return (body) => {
          axios
            .post(`${import.meta.env.VITE_API_URL}/signup`, body)
            .then(() => navigate("/"))
            .catch(error =>{
              if(error.response.status === 409){
                alert("Ja existe um usuario cadastrado com esses dados");
                return;
              }
              alert("Erro desconhecido!");
            })
        };
    }

    const register = useRegister();

    function formChange(e) {
        e.preventDefault();
        register(formData);
    }

    return (
        <RegisterContainer>
            <h1>Cadastro de Cliente</h1>
            <form onSubmit={formChange}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={formData.nome} onChange={changeFormData} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={changeFormData} />
                </div>
                <div>
                    <label>CPF:</label>
                    <input type="text" name="cpf" value={formData.cpf} onChange={changeFormData} />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={changeFormData} />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="senha" value={formData.senha} onChange={changeFormData} />
                </div>
                <div>
                    <label>Confirmar Senha:</label>
                    <input type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={changeFormData} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            <span>Já tem uma conta?<Link to="/signin"> Entre agora!</Link></span>
        </RegisterContainer>
    );
}

const RegisterContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    //background-image: url(${backgroundRegister});
    background-color: red;
    background-size: cover;
    background-position: center;
`;