import React, { useState } from "react";
import {
    Container,
    Title,
    Field,
    Label,
    Input,
    Select,
    QuillEditor,
    ImageField,
    ImageDescription,
    ButtonContainer,
    Button,
    Loading,
} from "./styles";
import "./globalStyle.css";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { wait } from "../../services/utils";
import ErroText from "../../components/ErroText";
import { useTranslation } from "react-i18next";

export function CadastroArtigo() {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [categoria, setCategoria] = useState("");
    const [titulo, setTitulo] = useState("");
    const [artigo, setArtigo] = useState("");
    const [imagem, setImagem] = useState("");

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleArtigoChange = (value) => {
        setArtigo(value);
    };

    const handleImagemChange = (event) => {
        const file = event.target.value;
        if (file != null && file != "") {
            setImagem(file);
            // Não podemos salvar uma imagem no BD, só sua referência.
            // Essa formação provavelmente será utilizada só para exibição do artigo.
            //setImagem(URL.createObjectURL(file));
        }
    };

    function checkArticle() {
        if (categoria == "") return false;
        if (titulo == "") return false;
        if (artigo == "") return false;

        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);
        await wait(1000);
        if (checkArticle()) {
            api.post("criarArtigo", {
                titulo: titulo,
                conteudo: artigo,
                disciplina: categoria,
            })
                .then((response) => {
                    response.json().then((data) => {
                        switch (response.status) {
                            case 200:
                                setError(null);
                                navigate(`/home`);
                                break;
                            // case 403:
                            //     setError(data.message);
                            //     break;
                            // case 500:
                            //     setError(data.message);
                            //     break;
                            default:
                                console.log(data.message);
                                setError(t('errorSubmitArt'));
                                break;
                        }
                        setLoading(false);
                    });
                })
                .catch((error) => {
                    console.log(error.message);
                    setError(t('errorSubmitArt'));
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setError(t("emptyArticle"));
        }
    };

    const navigate = useNavigate();

    return (
        <div>
            <Container>
                <Title alignLeft>{t("createArticle")}</Title>
                <fieldset disabled={loading}>
                    <div className="px-2 rounded py-4 bg-white/[.15]">
                        <Field>
                            <Label>{t("category")}</Label>
                            {/*
                      Deverá ser substituido por uma validação que só permite que o professor publique na
                      disciplina que ele possui acesso
                      */}
                            <Select
                                className="rounded border-1 border-white"
                                value={categoria}
                                onChange={handleCategoriaChange}
                            >
                                <option value="">{t("selectOp")}</option>
                                <option value="physical">
                                    {t("Physical")}
                                </option>
                                <option value="finance">
                                    {t("Financial")}
                                </option>
                                <option value="feature">
                                    {t("Functional")}
                                </option>
                                <option value="philosophy">
                                    {t("Philosophical")}
                                </option>
                            </Select>
                        </Field>
                        <Field>
                            <Label>{t("artTitle")}</Label>
                            <Input
                                type="text"
                                value={titulo}
                                onChange={handleTituloChange}
                            />
                        </Field>
                        <Field>
                            <Label>{t("article")}</Label>
                            <QuillEditor
                                value={artigo}
                                onChange={handleArtigoChange}
                            />
                        </Field>

                        {/*<Field>
        <Label>Inserir Imagem:</Label>
        <ImageField onClick={() => document.getElementById('imagem-input').click()}>
          {imagem && <img src={imagem} alt="Imagem do Artigo" />}
          {!imagem && <ImageDescription>Clique aqui para buscar a imagem de capa do artigo</ImageDescription>}
          <input id="imagem-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImagemChange} />
        </ImageField>
      </Field> */}

                        <Field>
                            <Label>{t("linkArtCover")}</Label>
                            <Input
                                type="text"
                                value={imagem}
                                onChange={handleImagemChange}
                            />
                        </Field>
                    </div>
                </fieldset>
            </Container>
            <ButtonContainer>
                {error != null ? (
                    <ErroText iconname="circle-exclamation" label={error} />
                ) : null}
                {loading ? (
                    <div className="px-8 py-2">
                        <Loading />
                    </div>
                ) : null}

                <Button type="button" onClick={() => navigate("/meu-perfil")}>
                    {t("cancel")}
                </Button>

                {/**
        <Button type="submit" onClick={handleSubmit}>
            Salvar Rascunho
        </Button>
        */}
                {/**
                 * Futuramente o botão avançar levará para uma tela para completar as informações
                 * do artigo / quiz / revisão de informações gerais / preview / confirmar pub
                 */}
                <Button type="submit" onClick={handleSubmit}>
                    {t("save")}
                </Button>
            </ButtonContainer>
        </div>
    );
}
