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
} from "./styles";
import "./globalStyle.css";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { wait } from "../../services/utils";
import ErroText  from "../../components/ErroText";

export function CadastroArtigo() {
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
        setLoading(true);
        await wait(2000);
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
                            case 403:
                                setError(data.message);
                                break;
                            case 500:
                              setError(data.message);
                                break;
                            default:
                              setError(data.message);
                                break;
                        }
                        setLoading(false);
                    });
                })
                .catch((error) => {
                    console.log(error.message);
                    setError(error.message);
                    setLoading(false);
                });
        }
    };

    const navigate = useNavigate();

    return (
        <Container>
            <Title alignLeft>Criar Artigo</Title>
            <fieldset disabled={loading}>
                <div className="px-2 rounded py-4 bg-white/[.15]">
                    <Field>
                        <Label>Categoria:</Label>
                        {/*
                      Deverá ser substituido por uma validação que só permite que o professor publique na
                      disciplina que ele possui acesso
                      */}
                        <Select
                            className="rounded border-1 border-white"
                            value={categoria}
                            onChange={handleCategoriaChange}
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="physical">Educação Física</option>
                            <option value="finance">Educação Financeira</option>
                            <option value="feature">Educação Funcional</option>
                            <option value="philosophy">
                                Educação Filosófica
                            </option>
                        </Select>
                    </Field>
                    <Field>
                        <Label>Título do Artigo:</Label>
                        <Input
                            type="text"
                            value={titulo}
                            onChange={handleTituloChange}
                        />
                    </Field>
                    <Field>
                        <Label>Artigo:</Label>
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
                        <Label>Link da Imagem de Capa do Artigo:</Label>
                        <Input
                            type="text"
                            value={imagem}
                            onChange={handleImagemChange}
                        />
                    </Field>

                    <ButtonContainer>
                        {error != null ? (
                            <ErroText
                                iconname="circle-exclamation"
                                label={error}
                            />
                        ) : null}

                        <Button
                            type="button"
                            onClick={() => navigate("/meu-perfil")}
                        >
                            Cancelar
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
                            Salvar
                        </Button>
                    </ButtonContainer>
                </div>
            </fieldset>
        </Container>
    );
}
