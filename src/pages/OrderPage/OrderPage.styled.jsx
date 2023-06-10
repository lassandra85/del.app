import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const ItemContainer = styled.div`
  width: 50%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

export const DiscoverLink = styled(Link)`
  background-color: #1da1f2;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 5;
  &:hover {
    background-color: #0c8de4;
  }
`;

export const Title = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2b0505;
`;

export const EmptyCartWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;