import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from 'common/style';
import { Bullet as BasicBullet } from './Bullet';

export const ActiveBullet = () => {
  return (
    <ActiveBulletWrapper>
      <Bullet />
    </ActiveBulletWrapper>
  );
};

export const ActiveBulletWrapper = styled.span`
  ${FlexCenter};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgb(255, 38, 74, 0.5);
`;

export const Bullet = styled(BasicBullet)`
  background-color: rgb(255, 38, 74, 1);
  opacity: 1;
`;

export default ActiveBullet;
