import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PetCard from '../components/PetCard';
import FixedMenu from '../components/Menu';
import AuthContext from '../contexts/AuthContext';

export default function HomePage() {
    const [pets, setPets] = useState([]);
    const authContext = useContext(AuthContext);
    const { token } = authContext;

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setPets(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter lista de pets disponíveis:', error);
            });
    }, [token]);

    return (
        <HomeContainer>
            <FixedMenu />
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F3B555;
`;
