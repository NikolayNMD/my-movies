import { useState } from 'react';
import { styled } from 'styled-components';

export const SearchForm = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query.toLowerCase());
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  input {
    padding: 12px 14px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 2px solid black;
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;
    outline: none;

    &:hover {
      border: 2px solid teal;
      color: teal;
    }
  }
  button {
    padding: 12px 12px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 2px solid black;
    color: #191d1e;
    font-weight: 600;
    font-size: 20px;

    &:hover {
      color: teal;
      border: 2px solid teal;
    }
  }
`;
