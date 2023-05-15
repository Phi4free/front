import { useState } from "react";

import { close, menu } from "../../../assets/LandingPage";
import logo from "../../../assets/logo.png";
import { ButtonLogin, ButtonRegister } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("O que somos");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const navLinks = [
    {
      id: "home",
      title: "O que somos",
    },
    {
      id: "features",
      title: "Estude com qualidade",
    },
    {
      id: "product",
      title: "Prepare-se para o futuro",
    },
    {
      id: "pillars",
      title: "Nossos pilares",
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
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li
          className={`font-normal cursor-pointer text-[16px]`}
          onClick={() => console.log("Aluno")}
        >
          <ButtonLogin
            type="button"
            onClick={() => navigate("/login-estudante")}
          >
            Sou estudante
          </ButtonLogin>
        </li>
        <li
          className={`font-normal cursor-pointer text-[16px]`}
          onClick={() => console.log("Professor")}
        >
          <ButtonRegister
            type="button"
            onClick={() => navigate("/login-professor")}
          >
            Sou professor
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
              onClick={() => console.log("Aluno")}
            >
              Login
            </li>
            <li
              className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
              onClick={() => console.log("Professor")}
            >
              Cadastre-se
            </li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] mb-4 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
