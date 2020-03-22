import React from 'react';
import styled from 'styled-components';
import { Bullet, ActiveBullet } from 'components/Bullet';

export const BulletPagination = ({ length, active, setPage }) => {
  return (
    <Container>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <li key={index} onClick={() => setPage(index)}>
            {active === index ? <ActiveBullet /> : <Bullet />}
          </li>
        ))}
    </Container>
  );
};

const Container = styled.ul`
  position: absolute;
  bottom: 20%;
  display: flex;
  align-items: center;
  li {
    margin-right: 1rem;
  }
  li:last-child {
    margin-right: 0;
  }
`;

export default BulletPagination;
