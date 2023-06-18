import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffc107;
`;

export const Content = styled.div`
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;