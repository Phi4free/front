import React from 'react';
import { Container, Title, Content } from './styles';

export function TermosDeUso() {
  const termosDeUso = `
    <h1>Termos de Uso</h1>
    <p>Bem-vindo aos Termos de Uso da plataforma Phi4Free. Ao utilizar nossa plataforma, você concorda em cumprir os seguintes termos e condições:</p>
    <h2>1. Uso da Plataforma</h2>
    <p>Você concorda em usar a plataforma Phi4Free de acordo com as leis aplicáveis e de forma ética. Não é permitido:</p>
    <ul>
      <li>Publicar conteúdo ofensivo ou ilegal.</li>
      <li>Fazer uso indevido da plataforma para obter informações pessoais de outros usuários.</li>
      <li>Violentar a privacidade de outros usuários.</li>
    </ul>
    <h2>2. Responsabilidade do Usuário</h2>
    <p>Ao utilizar a plataforma Phi4Free, você é responsável pelo conteúdo que publica e pelas interações que realiza. Você concorda em:</p>
    <ul>
      <li>Manter suas informações de conta atualizadas e precisas.</li>
      <li>Não compartilhar sua senha com terceiros.</li>
      <li>Respeitar os direitos autorais e propriedade intelectual de outros usuários.</li>
    </ul>
    <h2>3. Modificações nos Termos de Uso</h2>
    <p>A Phi4Free se reserva o direito de modificar estes Termos de Uso a qualquer momento. Recomendamos que você verifique regularmente esta página para ficar atualizado sobre quaisquer alterações.</p>
  `;

  return (
    <Container>
      <Title>Termos de Uso</Title>
      <Content dangerouslySetInnerHTML={{ __html: termosDeUso }} />
    </Container>
  );
}