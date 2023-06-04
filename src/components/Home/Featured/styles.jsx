import styled from "styled-components";
import Reader from "../../../assets/reader.png";

export const Container = styled.section`
  height: 100vh;
  background-image: url(${Reader});
  background-size: cover;
  background-position: center;

  @media (max-width: 760px) {
    height: 90vh;
  }
`;

export const Vertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #1a1a1a 10%, transparent 80%);
`;

export const Horizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #1a1a1a 30%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
  @media (max-width: 760px) {
    background: linear-gradient(to right, #1a1a1a 40%, transparent 100%);
  }
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const Points = styled.div`
  display: inline-block;
  color: #ffc300;
  margin-right: 15px;
`;

export const Year = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const Seasons = styled.div`
  display: inline-block;
`;

export const Description = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const Buttons = styled.div`
  margin-top: 15px;
`;

export const Button = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  background-color: #fff;
  color: #000;
  opacity: 1;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
