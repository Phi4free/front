import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'right')};
  margin-bottom: 20px;
`;

export const Field = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #000; /* Adicione a cor preta */
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #000; /* Adicione a cor preta */
`;

export const QuillEditor = styled(ReactQuill)`
  .ql-container {
    background-color: #fff;
    color: #000;
    height: 300px; /* Altura personalizada */
    margin-bottom: 0; /* Remova a margem inferior */
    border-radius: 5px; /* Adicione as bordas arredondadas */
    overflow: hidden; /* Esconda os cantos arredondados que ultrapassam a altura */
  }

  .ql-toolbar {
    border-top-left-radius: 5px; /* Adicione as bordas arredondadas ao canto superior esquerdo */
    border-top-right-radius: 5px; /* Adicione as bordas arredondadas ao canto superior direito */
    background-color: #fff; /* Defina a cor de fundo da barra de ferramentas */
  }

  .ql-editor {
    height: 100%;
  }
`;

export const ImageField = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fff;
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
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #ffc300;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
`;

