import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PetCard from '../components/PetCard.jsx';
import FixedMenu from '../components/Menu.jsx';
import AuthContext from '../contexts/AuthContext';

export default function PetPage() {
    const [petData, setPetData] = useState([]);

    const authContext = useContext(AuthContext);
    const { token } = authContext;

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setPetData(response.data);
        })
        .catch(error => {
            console.error('Erro ao obter dados do animal de estimação:', error);
        });
    }, [id, token]);
    
    return (
        <PageContainer>
            <FixedMenu />
            <PetCardList>
                <PetCard pet={petData} />
            </PetCardList>
        </PageContainer>
    );
}

const PageContainer = styled.div`
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