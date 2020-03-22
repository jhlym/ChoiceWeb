import React from 'react';
import styled from 'styled-components';

export const SearchForm = ({ onSubmit }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <Search type="text" placeholder="찾고자 하는 컨텐츠를 입력하세요." />
    </form>
  );
};

const Search = styled.input`
  border: none;
  width: 480px;
  padding: 1rem 0.5rem;
  border-radius: 4px;
  margin-bottom: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover,
  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  color: #111;
  &::placeholder {
    color: #d8d8d8;
  }
  &:focus {
    outline: none;
  }
`;
