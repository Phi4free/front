// Definição de rotas utilizando react-router-dom
import React from 'react'

import {
  Routes,
  Route
} from "react-router-dom";

import { LandingPage } from '../pages/LandingPage'
import { Login } from '../pages/Login'
import { LoginProfessor } from '../pages/LoginProfessor';
import { LoginIdentificacao } from '../pages/IdentificacaoLogin';
import { CadastroIdentificacao } from '../pages/IdentificacaoCadastro';
import { Cadastro } from '../pages/Cadastro';
import { CadastroProfessor } from '../pages/CadastroProfessor';
import { Perfil } from '../pages/Perfil';
import { Home } from '../pages/Home';
import { TermosDeUso } from '../pages/TermosDeUso';
import { SessionExpired } from '../pages/SessionExpired';
import { CadastroArtigo } from '../pages/CadastroArtigo';
import { NotFound } from '../pages/NotFound';
import { PerfilProfessor } from '../pages/PerfilProfessor'

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/login-dentificacao' element={<LoginIdentificacao />}></Route>
      <Route path='/cadastro' element={<CadastroIdentificacao/>}></Route>
      <Route path='/cadastro-estudante' element={<Cadastro/>}></Route>
      <Route path='/cadastro-professor' element={<CadastroProfessor/>}></Route>
      <Route path='/login-estudante' element={<Login />}></Route>
      <Route path='/login-professor' element={<LoginProfessor />}></Route>
      <Route path='/meu-perfil' element={<Perfil/>}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/termos-de-uso' element={<TermosDeUso />}></Route>
      <Route path='/cadastro-artigo' element={<CadastroArtigo />}></Route>
      <Route path='/session-expired' element={<SessionExpired/>}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path='/meu-perfil-professor' element={<PerfilProfessor/>}></Route>
    </Routes>
  )
}