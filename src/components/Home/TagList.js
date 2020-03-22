import styled from 'styled-components';
import { Theme } from 'common/style';

export const TagList = styled.ul`
  display: flex;
  margin-bottom: 1.5rem;
  color: ${Theme.primary};
  opacity: 0.5;
  li {
    margin-right: 0.5rem;
  }
`;
