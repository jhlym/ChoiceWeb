import React from 'react';
import { Container, MainText, TagList, SearchForm } from 'components/Home';
import { useHistory } from 'react-router-dom';

export const HomeContainer = () => {
  const history = useHistory();
  const onSubmit = e => {
    e.preventDefault();
    history.push('/question');
  };

  return (
    <Container>
      <MainText>
        당신의 성향에 맞는 컨텐츠를 추천해줍니다<span role="img">😎</span>
      </MainText>
      <TagList>
        <li>
          <span>#패션</span>
        </li>
        <li>
          <span>#반려견</span>
        </li>
        <li>
          <span>#도서</span>
        </li>
        <li>
          <span>#컴퓨터</span>
        </li>
        <li>
          <span>등등...</span>
        </li>
      </TagList>
      <SearchForm onSubmit={onSubmit} />
    </Container>
  );
};

export default HomeContainer;
