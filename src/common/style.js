import styled, { css, createGlobalStyle } from 'styled-components';

export const Theme = {
  primary: '#5756B3',
  red: '#FF264A'
};

export const GlobalStyle = createGlobalStyle`
    /* reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
    }

    html,body, div#root {
      width: 100%;
      height: 100%;
      font-family: 'Noto Sans KR', sans-serif;
    }

    body {
      background-color: #F6F7FB;
    }

    ul {
      list-style:none;
    }
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexCenterDiv = styled.div`
  ${FlexCenter}
`;
