// Definição de rotas utilizando react-router-dom
import React from 'react'

import {
  Routes,
  Route
} from "react-router-dom";

import { LandingPage } from '../pages/LandingPage'
import { Login } from '../pages/Login'
import { LoginIdentificacao } from '../pages/IdentificacaoLogin';

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<LoginIdentificacao />}></Route>
      <Route path='/login-estudante' element={<Login />}></Route>
      <Route path='/landing-page' element={<LandingPage />}></Route>
    </Routes>
  )
}