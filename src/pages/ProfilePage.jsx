import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PetCard from '../components/PetCard.jsx';
import FixedMenu from '../components/Menu.jsx';
import AuthContext from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
    const [userPets, setUserPets] = useState([]);

    const authContext = useContext(AuthContext);
    const { token } = authContext;

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setUserPets(response.data);
        })
        .catch(error => {
            console.error('Erro ao obter animais de estimação do usuário:', error);
        });
    }, []);

    return (
        <HomeContainer>
            <FixedMenu />
            <PetCardList>
                {userPets.map(pet => (
                    <PetCardLink to={`/pets/${pet.id}`} key={pet.id}>
                        <PetCard pet={pet} />
                    </PetCardLink>
                ))}
            </PetCardList>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F3B555;
`;

const PetCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
`;

const PetCardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin: 10px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;
