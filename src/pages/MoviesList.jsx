import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <UlStyle>
      {movies.map(({ id, title, poster_path }) => (
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <LiStyle key={id}>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
              }
              alt={title}
              width="154"
              height="231"
            />
            <WrapCardStyle>
              <h3>{title}</h3>
            </WrapCardStyle>
          </LiStyle>
        </Link>
      ))}
    </UlStyle>
  );
};

const UlStyle = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

const LiStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 154px;
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

const WrapCardStyle = styled.div`
  min-height: 150px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  border: 1px solid whitesmoke;
  border-top: none;
  border-radius: 0 0 5px 5px;
  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
  }
`;
