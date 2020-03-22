import React from 'react';
import styled from 'styled-components';
import { Theme } from 'common/style';

export const OptionList = ({ options }) => {
  return (
    <StyledWrapper>
      {options.map((option, index) => (
        <li key={index}>
          <Option>{option}</Option>
        </li>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.ul`
  display: flex;
  justify-content: center;
  li {
    margin-right: 1rem;
  }
  li:last-child {
    margin-right: 0;
  }
`;

const Option = styled.span`
  display: block;
  background-color: #fff;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border-radius: 4px;
  color: ${Theme.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  &:hover {
    background-color: ${Theme.primary};
    color: #fff;
  }
`;

export default OptionList;
