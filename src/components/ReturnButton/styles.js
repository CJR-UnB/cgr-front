import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

export const ButtonContainer = styled.div`
    color: #454555;

    display: flex;
    align-items: center;

    position: relative;
    left: -43%;
    cursor: pointer;
`;
export const Icon = styled(FaChevronLeft)`
    font-size: 1.2rem;
    margin-right: 5px;
`;
