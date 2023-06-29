import styled from "styled-components";

export const Container = styled.div`
    margin-top: 80px;
`;

export const Item = styled.div`
    @media only screen and (min-width: 768px) {
        padding: 10px 30px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background: #ffffff1b;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    min-height: 500px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const InfoData = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 70%;
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: rgb(255, 195, 0);
    @media only screen and (min-width: 768px) {
        margin: 10% 0;
    }
    @media only screen and (max-width: 768px) {
        font-size: 25px;
    }
`;

export const Author = styled.div``;

export const PublicationDate = styled.div``;

export const Subject = styled.div``;

export const Banner = styled.div`
    width: 100%;
    height: 400px;
    background-image: ${(props) => `url(${props.img})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    @media only screen and (min-width: 768px) {
        width: 250px;
    }
`;

export const Content = styled.div`
    padding: 16% 6%;
    @media only screen and (min-width: 768px) {
        padding: 50px;
    }
`;
