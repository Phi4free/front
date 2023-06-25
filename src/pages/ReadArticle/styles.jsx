import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
`;

export const Item = styled.div`
  padding: 10px 30px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 800px;
  max-width: 1500px;
  background: #ffffff1b;
  padding: 20px;
  border-radius: 10px;
`;

export const InfoData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: rgb(255, 195, 0);
  margin: 70px 0;
`;

export const Author = styled.div``;

export const PublicationDate = styled.div``;

export const Subject = styled.div``;

export const Banner = styled.div`
  width: 250px;
  height: 400px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;

export const Content = styled.div`
  padding: 50px;
`;
