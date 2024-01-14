import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: block;
  color: orange;
  font-weight: 700;
  font-size: 16px;
  padding: 6px;
  border: 1px solid orange;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 110px;
  &:hover {
    color: teal;
    border: 1px solid teal;
  }
`;

export const WrapStyle = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
  h3 {
    span {
      background-color: orange;
      border-radius: 25%;
    }
  }
`;

export const AddListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  text-decoration: underline;
`;
