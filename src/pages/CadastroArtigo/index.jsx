import React, { useState } from 'react';
import { Container, Title, Field, Label, Input, Select, QuillEditor, ImageField, ImageDescription, ButtonContainer, Button } from './styles';

export function CadastroArtigo() {
  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('');
  const [artigo, setArtigo] = useState('');
  const [imagem, setImagem] = useState(null);

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

  return (
    <Container>
      <Title alignLeft>Criar Artigo</Title>
      <Field>
        <Label>Categoria:</Label>
        <Select value={categoria} onChange={handleCategoriaChange}>
          <option value="">Selecione uma opção</option>
          <option value="educacao-fisica">Educação Física</option>
          <option value="educacao-financeira">Educação Financeira</option>
          <option value="educacao-funcional">Educação Funcional</option>
          <option value="educacao-filosofica">Educação Filosófica</option>
        </Select>
      </Field>
      <Field>
        <Label>Título do Artigo:</Label>
        <Input type="text" value={titulo} onChange={handleTituloChange} />
      </Field>
      <Field>
        <Label>Artigo:</Label>
        <QuillEditor value={artigo} onChange={handleArtigoChange} />
      </Field>
      <Field>
        <Label>Inserir Imagem:</Label>
        <ImageField onClick={() => document.getElementById('imagem-input').click()}>
          {imagem && <img src={imagem} alt="Imagem do Artigo" />}
          {!imagem && <ImageDescription>Clique aqui para buscar a imagem de capa do artigo</ImageDescription>}
          <input id="imagem-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImagemChange} />
        </ImageField>
      </Field>
      <ButtonContainer>
        <Button type="button">Cancelar</Button>
        <Button type="submit" onClick={handleSubmit}>Avançar</Button>
      </ButtonContainer>
    </Container>
  );
}

