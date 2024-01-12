import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  StyledNavLink,
  MainTitle,
  NavStyled,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <MainTitle>React Movies</MainTitle>
        <NavStyled>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavStyled>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
