import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function PetCard({ petId }) {
    const [petData, setPetData] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/pets/${petId}`)
            .then(response => {
                setPetData(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter dados do animal de estimação:', error);
            });
    }, [petId]);

    if (!petData) {
        return <LoadingMessage>Carregando...</LoadingMessage>;
    }

    const { imageUrl, name, description, phone } = petData;

    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={imageUrl} alt={name} />
            </ImageContainer>
            <InfoContainer>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Phone>{phone}</Phone>
            </InfoContainer>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 8px;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const CardImage = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border-radius: 8px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 16px;
`;

const Name = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
`;

const Description = styled.div`
    font-size: 14px;
    margin-bottom: 8px;
`;

const Phone = styled.div`
    font-size: 14px;
    color: #555;
`;

const LoadingMessage = styled.div`
    text-align: center;
    font-size: 18px;
    color: #888;
    padding: 16px;
`;
