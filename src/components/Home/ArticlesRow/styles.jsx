import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 30px;
  &:hover .button {
    opacity: 1;
  }
`;

export const TitleList = styled.h2`
  margin: 0px 0px 0px 30px;
  text-align: left;
  font-size: 1.5em;
  font-weight: 700;
`;

export const Button = styled.div`
  position: absolute;
  width: 40px;
  height: 400px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;

  @media (max-width: 760px) {
    opacity: 1;
  }
`;

export const ListArea = styled.div`
  overflow: hidden;
  padding-left: 30px;
  height: 450px;
`;

export const List = styled.div`
  transition: all ease 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  width: 250px;
  height: 400px;
  cursor: pointer;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/w300${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(0.9);
  &:hover {
    transform: scale(1);
    transition: all ease 0.2s;
  }
`;

export const ItemInfo = styled.div`
  background: linear-gradient(to top, #1a1a1adc 95%, transparent 100%);
  padding: 20px 10px;
  height: 45%;
  margin-top: 90%;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemTitle = styled.h3`
  padding: 0px;
  text-align: left;
  font-weight: 700;
  font-size: 18px;
`;

export const ItemAdd = styled.button`
  border: 2px solid #ffc300;
  border-radius: 100%;
  padding: 6px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffc4004b;
    transition: all ease 0.1s;
  }
`;

export const ItemAuthor = styled.h6`
  text-align: left;
  font-weight: 600;
`;

export const ItemDescription = styled.p`
  padding: 8px 0px 0px;
  text-align: left;
`;