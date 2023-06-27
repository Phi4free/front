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
import "./globalStyle.css"
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export function CadastroArtigo() {
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
        const file = event.target.files[0];
        setImagem(URL.createObjectURL(file));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar os dados do artigo ao backend
    };

    const navigate = useNavigate();

    return (
        <Container>
            <Title alignLeft>Criar Artigo</Title>
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
                        <option value="educacao-fisica">Educação Física</option>
                        <option value="educacao-financeira">
                            Educação Financeira
                        </option>
                        <option value="educacao-funcional">
                            Educação Funcional
                        </option>
                        <option value="educacao-filosofica">
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
                    <QuillEditor value={artigo} onChange={handleArtigoChange} />
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
                    <Button
                        type="button"
                        onClick={() => navigate("/meu-perfil-professor")}
                    >
                        Cancelar
                    </Button>

                    <Button type="submit" onClick={handleSubmit}>
                        Salvar Rascunho
                    </Button>
                    {/**
                     * Futuramente o botão avançar levará para uma tela para completar as informações
                     * do artigo / quiz / revisão de informações gerais / preview / confirmar pub
                     */}
                    <Button type="submit" onClick={handleSubmit}>
                        Avançar
                    </Button>
                </ButtonContainer>
            </div>
        </Container>
    );
}
