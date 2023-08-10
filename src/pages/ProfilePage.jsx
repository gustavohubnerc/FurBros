import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PetCard from '../components/PetCard.jsx';
import FixedMenu from '../components/Menu.jsx';

export default function ProfilePage() {
    const [userPetIds, setUserPetIds] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/profile`), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
            .then(response => {
                setUserPetIds(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter IDs de animais de estimação do usuário:', error);
            });
    }, []);

    return (
        <HomeContainer>
            <FixedMenu />
            {userPetIds.map(petId => (
                <PetCard key={petId} petId={petId} />
            ))}
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F4F0EB;
`;
