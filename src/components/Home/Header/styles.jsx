import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: ${props => props.theme};
  transition: all ease 0.5s;
`;

export const Logo = styled.div`
  height: 25px;
`;

export const LogoImg = styled.img`
  height: 100%;
`;

export const User = styled.div`
  height: 35px;
`;

export const UserImg = styled.img`
  height: 100%;
  border-radius: 3px;
`;