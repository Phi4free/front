import {
    Container,
    ContainerInput,
    ImgCover,
    Form,
    LabelTitulo,
    RodapeTermos,
    LinkText,
    List
} from "./styles";
import DinamicInput from "../../components/DinamicInput";
import { Loading } from "../../components/Loading/styles";
import "./styleComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoAlt from "../../assets/logoalt.png";
import PrimaryButton from "../../components/PrimaryButton";
import ErroText from "../../components/ErroText";
import { BASE_URL } from "../../services/api";

export function CadastroProfessor() {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            <ImgCover>
                <div>
                    <img id="logo" src={logoAlt} alt="Logo" />
                </div>
            </ImgCover>
            <Form>
                <img id="logo" className="mobile" src={logoAlt} alt="Logo" width="200px" height="80px" />
                <LabelTitulo>TORNE-SE UM PROFESSOR DA PHI4FREE</LabelTitulo>
                <ContainerInput>
                <p>Compartilhe conteúdo útil e interessante para milhares de pessoas! Com nosso processo simplificado de inscrição, você pode gerar conhecimento do conforto de sua casa! Veja como é fácil:</p>
                </ContainerInput>
                <List>
                    <li>
                    Acesse nosso {" "}
                    <a href="https://phi4free.blogspot.com/" target="_blank">site de carreiras</a>
                    {" "}
                    e selecione a disciplina que quer lecionar
                    </li>
                    <li>
                    Preencha o cadastro na plataforma e anexe seu currículo e links que possam mostrar um pouco do seu trabalho
                    </li>
                    <li>
                    Envie tudo para avaliação e boa sorte!
                    </li>
                </List>
                <ContainerInput>
                    <PrimaryButton label="QUERO ME INSCREVER" onClick={() => console.log("Faz algo")} />
                </ContainerInput>

                <p>
                    Já tem uma conta?{" "}
                    <LinkText
                        onClick={() => navigate('/login-professor')}
                    >
                        Faça o login
                    </LinkText>
                </p>

                <RodapeTermos>
                    Para mais informações sobre os processos seletivos da plataforma, acesse nosso {" "}
                    <LinkText onClick={() => console.log("Deve abrir regulamento")}>
                        {" "}
                        Regulamento de carreiras{" "}
                    </LinkText>{" "}
                    ou
                    <LinkText
                        onClick={() => console.log("Deve abrir FAQ")}
                    >
                        {" "}
                        FAQ{" "}
                    </LinkText>
                    da Phi4Free.
                </RodapeTermos>
            </Form>
        </Container>
    );
}
