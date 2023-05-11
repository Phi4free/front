import {
    Container,
    ContainerInput,
    ImgCover,
    Form,
    LabelTitulo,
    RodapeTermos,
    LinkText,
} from "./styles";
import "./styleComponents.css";
import { useNavigate } from "react-router-dom";
import logoAlt from "../../assets/logoalt.png";
import PrimaryButton from "../../components/PrimaryButton";

export function CadastroIdentificacao() {
    const navigate = useNavigate();

    return (
        <Container>
            <ImgCover>
                <div>
                    <img id="logo" src={logoAlt} alt="Logo" />
                </div>
            </ImgCover>
            <Form>
                <img id="logo" className="mobile" src={logoAlt} alt="Logo" width="200px" height="80px" />
                <LabelTitulo>CRIE UMA CONTA E MERGULHE EM CONHECIMENTO DE QUALIDADE!</LabelTitulo>
                <ContainerInput>
                    <PrimaryButton label="ESTUDANTE - QUERO APRENDER" onClick={() => navigate('/cadastro-estudante')} />
                </ContainerInput>
                <ContainerInput>
                    <PrimaryButton label="PROFESSOR - QUERO ENSINAR" onClick={() => navigate('/cadastro-professor' )} />
                </ContainerInput>

                <p>
                    Já tem uma conta?{" "}
                    <LinkText
                        onClick={() => navigate('/')}
                    >
                        Faça o login
                    </LinkText>
                </p>

                <RodapeTermos>
                    Ao fazer cadastro, você concorda com os
                    <LinkText onClick={() => console.log("Deve abrir /termos")}>
                        {" "}
                        Termos de Uso{" "}
                    </LinkText>{" "}
                    e
                    <LinkText
                        onClick={() => console.log("Deve abrir /privacidade")}
                    >
                        {" "}
                        Política de Privacidade{" "}
                    </LinkText>
                    da plataforma.
                </RodapeTermos>
            </Form>
        </Container>
    );
}
