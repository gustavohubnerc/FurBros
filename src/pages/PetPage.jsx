import styled from 'styled-components';
import axios from 'axios';
import FixedMenu from '../components/Menu.jsx';

export default function PetPage(){
    const [ petId, setPetId ] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/pets/:id`)
            .then(response => {
                setPetId(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter IDs de animais de estimação:', error);
            });
    })
    return (
        <PageContainer>
            <FixedMenu />
            {petId.map(petId => (
                <PetCard key={petId} petId={petId} />
            ))}
        </PageContainer>
    )
}

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F4F0EB;
`;
