import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Container = styled.div`
  color: #fff;
  padding: 2%;
`;

export const Title = styled.h1`
  font-size: 32px; /* Aumenta o tamanho da fonte para 32px */
  text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'right')};
  margin-bottom: 20px;
  color: #ffc300; /* Altera a cor do texto para um amarelo brilhante */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adiciona uma sombra no texto */
`;

export const Field = styled.div`
  margin-bottom: 20px;
  `;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Loading = styled.div `
  margin-top: 2%;
  border: 4px solid #000814;
  border-top: 4px solid #6B00AD;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #000; 
  background-color: #f2f2f2; /* Linha para definir o fundo cinza claro */
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #000; /* Adicione a cor preta */
  background-color: #f2f2f2; /* Linha para definir o fundo cinza claro */
`;

export const QuillEditor = styled(ReactQuill)`
  .ql-container {
    background-color: #fff;
    color: #000;
    height: 300px; 
    margin-bottom: 0;
    border-radius: 5px; 
    overflow: hidden; 
    background-color: #f2f2f2; /* Linha para definir o fundo cinza claro */
  }

  .ql-toolbar {
    border-top-left-radius: 5px; 
    border-top-right-radius: 5px; 
    background-color: #fff; 
  }

  .ql-editor {
    height: 100%;
  }
`;

export const ImageField = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f2f2f2;  /* Linha para definir o fundo cinza claro */
  border-radius: 5px;
  border: 2px dashed #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden; /* Impede o estouro da imagem */
`;

export const ImageDescription = styled.div`
  font-size: 16px;
  text-align: center;
  color: #000;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  padding: 2%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: #ffc300;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
`;

