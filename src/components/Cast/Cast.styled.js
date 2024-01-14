import styled from 'styled-components';

export const UlCast = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

export const LiCast = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
