import styled from 'styled-components';
import { Theme } from 'common/style';

export const Bullet = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  background-color: ${Theme.primary};
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
