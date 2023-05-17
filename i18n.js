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
                    // miscelanous
                    andConnective: "and",
                    // Login & Sign up
                    enter: "ENTER",
                    noAccount: "Don't have an account?",
                    register: "Register",
                    enterAsStudent: "ENTER AS STUDENT",
                    enterAsTeacher: "ENTER AS TEACHER",
                    emailInput: "Email:",
                    passInput: "Password: ",
                    forgotPass: "Forgot password",
                    errorLogin1: "Invalid email or password",
                    errorLogin2: "An error occurred while logging in. Please try again later",
                    loginTerms1: "By loggin in, you agree to the",
                    loginTerms2: "of this platform.",
                    terms: "Terms of Use",
                    privacy: "Privacy Policy",
                    // password recover
                    passRecover: "Password recover",
                    passRecover1: "Forgot password? Don't worry, we'll send you an email to help you regain access to your account!",
                    passRecover2: "Enter the registered account email:",
                    passRecoverEmail: "registeredEmail@email.com",
                    sendEmail: "SEND EMAIL",
                    // Landing page
                    lang: "Language:",
                    usefulLinks: "Useful links"
                },
            },
            "pt-BR": {
                translation: {
                    //miscelanous
                    andConnective: "e",
                    // Login & Sign up
                    enter: "ENTRAR",
                    noAccount: "Não tem uma conta?",
                    register: "Faça o cadastro",
                    enterAsStudent: "ENTRAR COMO ESTUDANTE",
                    enterAsTeacher: "ENTRAR COMO PROFESSOR",
                    emailInput: "Email:",
                    passInput: "Senha: ",
                    forgotPass: "Esqueci a senha",
                    errorLogin1: "Email ou senha inválidos",
                    errorLogin2: "Ocorreu um erro ao efetuar o login. Por favor, tente novamente mais tarde",
                    loginTerms1: "Ao fazer login, você concorda com os",
                    loginTerms2: "da plataforma.",
                    terms: "Termos de Uso",
                    privacy: "Política de Privacidade",
                    // password recover
                    passRecover: "Recuperação de senha",
                    passRecover1: "Esqueceu a senha? Não se preocupe, vamos te enviar um email para ajudar a recuperar o acesso da sua conta!",
                    passRecover2: "Digite o email da conta cadastrada:",
                    passRecoverEmail: "emailCadastrado@email.com",
                    sendEmail: "ENVIAR EMAIL",
                    // Landing page
                    lang: "Idioma:",
                    usefulLinks: "Links Úteis",
                    
                },
            },
        },
    });

export default i18n;
