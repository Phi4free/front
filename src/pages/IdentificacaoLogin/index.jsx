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

export function LoginIdentificacao() {
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
                <LabelTitulo  className="font-bold text-2xl">BEM-VINDO(A) DE VOLTA!</LabelTitulo>
                <ContainerInput>
                    <PrimaryButton label="ENTRAR COMO ESTUDANTE" onClick={() => navigate('/login-estudante')} />
                </ContainerInput>
                <ContainerInput>
                    <PrimaryButton label="ENTRAR COMO PROFESSOR" onClick={() => navigate('/login-professor' )} />
                </ContainerInput>

                <p>
                    Não tem uma conta?{" "}
                    <LinkText
                        onClick={() => navigate('/cadastro')}
                    >
                        Faça o cadastro
                    </LinkText>
                </p>

                <RodapeTermos>
                    Ao fazer login, você concorda com os
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
