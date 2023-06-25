import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 10px;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme} 85%, transparent 100%)`};
  transition: all ease 0.5s;
`;

export const Logo = styled.div`
  width: 124px;
`;

export const LogoImg = styled.img`
  margin-top: -15px;
  height: 100%;
`;

export const User = styled.div`
  height: 35px;
`;

export const UserImg = styled.a`
  border: 2px solid #ffc300;
  border-radius: 100%;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
