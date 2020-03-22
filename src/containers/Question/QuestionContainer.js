import React, { useState } from 'react';
import { FlexCenterDiv } from 'common/style';
import Survey, { Container } from 'components/Question';
import { BulletPagination } from 'components/Pagination';
// import Swiper from 'react-id-swiper';

let surveys = [
  <Survey
    key={0}
    title="어느 계절의 옷을 찾고 계신가요?"
    options={['봄', '여름', '가을', '겨울']}
  />,
  <Survey
    key={1}
    title="어떤 종류의 옷을 찾고 계신가요?"
    options={['상의', '하의', '아우터', '신발']}
  />,
  <Survey
    key={2}
    title="어떤 스타일의 옷을 찾고 계신가요?"
    options={['캐주얼', '미니멀', '스트릿', '정장']}
  />
];

export const QuestionContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextStepListener = () => {
    if (activeIndex + 1 === surveys.length) return;
    setActiveIndex(activeIndex + 1);
  };
  return (
    <Container>
      <div onClick={nextStepListener}>{surveys[activeIndex]}</div>
      <BulletPagination length={surveys.length} active={activeIndex} setPage={setActiveIndex} />
    </Container>
  );
};

export default QuestionContainer;
