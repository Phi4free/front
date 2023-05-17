import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: "pt-BR",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    // Login & Sign up
                    enterAsStudent: "ENTER AS STUDENT",
                    emailInput: "Email:",
                    passInput: "Password: ",
                    forgotPass: "Forgot password",
                    errorLogin1: "Invalid email or password",
                    errorLogin2: "An error occurred while logging in. Please try again later",
                    // Landing page
                    lang: "Language:",
                    usefulLinks: "Useful links"
                },
            },
            "pt-BR": {
                translation: {
                    // Login & Sign up
                    enterAsStudent: "ENTRAR COMO ESTUDANTE",
                    emailInput: "Email:",
                    passInput: "Senha: ",
                    forgotPass: "Esqueci a senha",
                    errorLogin1: "Email ou senha inválidos",
                    errorLogin2: "Ocorreu um erro ao efetuar o login. Por favor, tente novamente mais tarde",
                    // Landing page
                    lang: "Idioma:",
                    usefulLinks: "Links Úteis",
                    
                },
            },
        },
    });

export default i18n;
