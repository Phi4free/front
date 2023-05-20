import { useState } from "react";

import { close, menu } from "../../../assets/LandingPage";
import logo from "../../../assets/logo.png";
import { ButtonLogin, ButtonRegister } from "./styles";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

/**
 * DOIS PROBLEMAS PARA VERIFICAR
 *
 * 1 - Botões do Navbar não estão realizando scroll para a porção da tela esperada, na vdd não estão fazendo scroll nenhum
 * 2 - Tradução, ao realizar o switch language, não está traduzindo automaticamente, só quando a tela é atualizada
 */

export default function Navbar() {
  const [active, setActive] = useState("O que somos");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const navLinks = [
    {
      id: "home",
      title: t('navWhat'),
    },
    {
      id: "features",
      title:  t('businessTitle'),
    },
    {
      id: "product",
      title:  t('futureTitle'),
    },
    {
      id: "pillars",
      title:  t('pillarsTitle'),
    },
  ];

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Phi4free" className="w-[124px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] mr-10 ${
              active === nav.title ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className={`font-normal cursor-pointer text-[16px]`}>
          <ButtonLogin
            type="button"
            onClick={() => navigate("/login-estudante")}
          >
            {t('imStudent')}
          </ButtonLogin>
        </li>
        <li className={`font-normal cursor-pointer text-[16px]`}>
          <ButtonRegister
            type="button"
            onClick={() => navigate("/login-professor")}
          >
            {t('imTeacher')}
          </ButtonRegister>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
              onClick={() => navigate("/login-estudante")}
            >
              {t('imStudent')}
            </li>
            <li
              className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
              onClick={() => navigate("/login-professor")}
            >
              {t('imTeacher')}
            </li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] mb-4 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
