import styled from 'styled-components';
import Colors from '../../../config/Colors'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${Colors.babyBlue};
    font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    background: ${Colors.blue};
    border-radius: 10px;
`;

export const Button = styled.button`
    width: 16rem;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.1rem;
    background: ${props => props.background || Colors.darkBlue};
    color: ${Colors.white};
    border: none;
    opacity: ${props => props.opacity};
	cursor: pointer;
    border-radius: 5px;
    transition: all .2s;
        
    &:hover{
        background: ${Colors.babyBlue};
        border: 1px solid ${Colors.babyBlue};
    }
`;

export const Text = styled.h1`
    font-size: 1.6rem;
    line-height: 1.7rem;
    margin-top: 0.5rem;
    text-decoration: none;
    color: ${Colors.white};
`;

export const TextLink = styled.a`
    font-size: 1.6rem;
    line-height: 1.7rem;
    margin-top: 0.5rem;
    text-decoration: none;
    color: ${Colors.white};
    cursor: pointer;
`;
