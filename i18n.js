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
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    enterAsStudent: "ENTER AS STUDENT",
                    emailInput: "Email:",
                    passInput: "Password: ",
                    forgotPass: "Forgot password",
                    errorLogin1: "Invalid email or password",
                    errorLogin2: "An error occurred while logging in. Please try again later"
                },
            },
            "pt-BR": {
                translation: {
                    enterAsStudent: "ENTRAR COMO ESTUDANTE",
                    emailInput: "Email:",
                    passInput: "Senha: ",
                    forgotPass: "Esqueci a senha",
                    errorLogin1: "Email ou senha inválidos",
                    errorLogin2: "Ocorreu um erro ao efetuar o login. Por favor, tente novamente mais tarde"
                },
            },
        },
    });

export default i18n;
