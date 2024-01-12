import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: solid 1px grey;
  margin-bottom: 20px;
  gap: 50px;
  align-items: baseline;
  padding: 20px 0;
`;

export const MainTitle = styled.h1`
  font-size: 28px;
  color: teal;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #191d1e;
  font-size: 20px;
  font-weight: 500;

  &.active {
    color: orange;
  }
`;
