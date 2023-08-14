import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
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
        axios.get(`${import.meta.env.VITE_API_URL}/home`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setPets(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter lista de pets disponíveis:', error);
            });
    }, [token]);

    return (
        <HomeContainer>
            <FixedMenu />
            <PetCardList>
                {pets.map(pet => (
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
    height: 100%;
    min-height: 100vh;
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