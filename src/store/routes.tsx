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
import { Home } from '../pages/Home'
import { Perfil } from '../pages/Perfil';

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
      <Route path='/home' element={<Home />}></Route>
      <Route path='/meu-perfil' element={<Perfil/>}></Route>
    </Routes>
  )
}