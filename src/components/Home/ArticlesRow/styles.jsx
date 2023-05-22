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
  height: 225px;
  background-color: rgba(26, 26, 26, 0.6);
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
  overflow-x: hidden;
  padding-left: 30px;
`;

export const List = styled.div`
transition: all ease 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 100%;
  transform: scale(0.9);
  &:hover {
    transform: scale(1);
    transition: all ease 0.2s;
  }
`;
