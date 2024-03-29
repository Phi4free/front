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
                    madeWith: "Made with",
                    byPhi: "by Phi4Free",
                    continue: "CONTINUE",
                    back: "GO BACK",
                    close: "CLOSE",
                    langSigle: "en",
                    cancel: "CANCEL",
                    andConnective: "and",
                    orConnective: "or",
                    blankInput: "This field cannot be empty",
                    save: "SAVE",
                    // error
                    notFound: "Page not found",
                    errorAuth: "A validation error has occured",
                    sessionExpired: "Session expired",
                    sessionExpText: "Log in again to continue where you were",
                    goFrontPage: "Or go to the front page",
                    // Login
                    enter: "ENTER",
                    noAccount: "Don't have an account?",
                    register: "Register",
                    enterAsStudent: "ENTER AS STUDENT",
                    enterAsTeacher: "ENTER AS TEACHER",
                    emailInput: "Email:",
                    passInput: "Password: ",
                    forgotPass: "Forgot password",
                    errorLogin1: "Invalid email or password",
                    errorLogin2:
                        "An error occurred while logging in. Please try again later",
                    loginTerms1: "By loggin in, you agree to the",
                    loginTerms2: "of this platform.",
                    terms: "Terms of Use",
                    privacy: "Privacy Policy",
                    // password recover
                    passRecover: "Password recover",
                    passRecover1:
                        "Forgot password? Don't worry, we'll send you an email to help you keep your account safe!",
                    passRecover2: "Enter the registered account email:",
                    passRecoverEmail: "registeredEmail@email.com",
                    sendEmail: "SEND EMAIL",
                    //Sign in
                    registerStudent: "CREATE STUDENT ACCOUNT",
                    registerTeacher: "BECOME A TEACHER AT PHI4FREE",
                    registerRules: "career regulation",
                    nameInput: "Full name:",
                    confirmPassInput: "Confirm password:",
                    createAccount: "CREATE ACCOUNT",
                    yesAccount: "Already have an account?",
                    login: "Log in",
                    registerInfo:
                        "Share useful and interesting content to thousands of people! With our streamlined application process, you can create knowlodge from the comfort of your home! See how easy it is:",
                    registerInfo1: "Acess our",
                    carrers: "carrer site",
                    "registerInfo1.2":
                        "and select the subject you want to teach",
                    registerInfo2:
                        "Fill out the registration on the platform and attach your resume and links that can show some of your work",
                    registerInfo3:
                        "Submit everything for review and good luck!",
                    registerTerms1: "By registering, you agree to the",
                    registerTerms2:
                        "For more information about the platform's selection processes, visit our",
                    btnSubscribe: "I WANT TO REGISTER",
                    errorRegister1: "The passwords are different",
                    errorRegister2: "Validation error",
                    errorRegister3:
                        "An error occurred while registering. Please try again later",
                    errorRegister4: "Enter your name to create an account",
                    byPhi4Free: "",
                    // Landing page
                    //Navbar
                    navWhat: "What are we",
                    imStudent: "I'm a Student",
                    imTeacher: "I'm a Teacher",
                    //Hero
                    heroTitle1: "Awaken your",
                    heroTitle2: "potential",
                    heroTitle3: "with education.",
                    heroAbout:
                        "Phi4Free is a free educational platform, focused on teaching 4 essential pillars for people's personal, professional and social development.",
                    // business
                    businessTitle: "Study with quality",
                    businessPar1:
                        "Phi4Free has highly qualified professors and impeccable content curation. You will have access to a unique and inspiring learning community, with articles, quizzes, challenges and forums to share your doubts and discoveries with other students and professors.",
                    businessPar2:
                        "You will be able to learn about subjects that really matter, such as how to take care of your physicalTitle and mental health, how to manage your personal finances, how to maintain a functional and healthy routine and even how to develop your critical and philosophical thinking about the deeper issues of life. And best of all: All of this completely free!",
                    busItem1Title: "Qualified Teachers",
                    busItem1Par:
                        "We select only proven expert professionals to create high quality content.",
                    busItem2Title: "Trusted Material",
                    busItem2Par:
                        "Our curation team has a strict review process before publishing new material.",
                    busItem3Title: "Share with friends",
                    busItem3Par:
                        "Share our content with your friends and evolve together in this trajectory of knowledge.",
                    //future
                    futureTitle: "Get ready for the future",
                    futurePar:
                        "Our professors are experts in their fields and are always up to date with the latest trends and practices. And with Phi4Free's curated content, you can be sure you're getting reliable and accurate information. Study without distractions, without leaving your home.",
                    //pillars
                    pillarsTitle: "Our pillars",
                    pillarsPar:
                        "Living a balanced and fulfilling life requires a holistic approach that embraces different areas of knowledge and practical skills. Phi4free, covering financial, physicalTitle, philosophical and functional education, offers a unique journey to help develop fundamental skills for a healthy, balanced and satisfying life.",
                    //cta
                    ctaTitle: "So, shall we begin?",
                    ctaPar: "Gain knowledge to build a solid foundation for a balanced, meaningful and authentic life.",
                    //footer
                    lang: "Language:",
                    footerPar:
                        "A new way to acquire knowledge in a practical, easy and reliable way.",
                    usefulLinks: "Useful links",
                    aboutUs: "About Us",
                    workUs: "Carrers",
                    support: "Support the Project",
                    courses: "Our courses",
                    Financial: "Financial Education",
                    Philosophical: "Philosophical Education",
                    Physical: "Physical Education",
                    Functional: "Functional Education",
                    contact: "Contact us",
                    // my profile
                    loadingProfile: "Loading profile...",
                    altEmail: "Change email",
                    altPass: "Change password",
                    accSecurity: "Security & Account",
                    logout: "Logout",
                    advancedOptions: "ADVANCED OPTIONS",
                    unavailableOption:
                        "Sorry! This option is still not available",
                    //topbar my profile
                    ranking: "RANKING",
                    writeArticle: "WRITE ARTICLE",
                    store: "PHISTORE",
                    editProfile: "EDIT PROFILE",
                    user404: "User not found",
                    interests: "Interests",
                    teacher: "Professor",
                    expand: "Expand",
                    recoil: "Retract",
                    //feed my profile
                    archieve: "Archievements",
                    studyList: "Study list",
                    certificates: "Certificates",
                    published: "Published Articles",
                    drafts: "Drafts",
                    feedError:
                        "An error has occured while searching for the feed",
                    feedEmpty: "Nothing to show",
                    //change email
                    differentEmail: "These emails are different",
                    emptyEmail: "The new email cannot be empty",
                    currentEmail: "Your current email is",
                    insertNewEmail: "Insert a new email",
                    confirmEmail: "Confirm email",
                    updateEmail: "UPDATE EMAIL",
                    //change password
                    invalidPass: "Invalid password",
                    currentPass: "Type your current password",
                    newPass: "Type a new password",
                    confirmNewPass: "Confirm your new password",
                    updatePass: "UPDATE PASSWORD",
                    // logout
                    seeYouLater:
                        "See you later! Sign in again when you're ready to continue",
                    endSection: "END SESSION",
                    // home
                    financeTitle: "Financial",
                    philosophyTitle: "Philosophical",
                    physicalTitle: "Fitness",
                    featureTitle: "Functional",
                    author: "Author:",
                    pubDate: "Publication date:",
                    discipline: "Discipline:",
                    explore: "Explore, learn, evolve.",
                    welcome: "Welcome",
                    carlsagan:
                        "The pursuit of knowledge is like opening the windows of the mind to a world of possibilities - Carl Sagan",
                    myList: "My list",
                    //lerArtigo
                    loadingArt: "Loading article...",
                    // criarArtigo
                    createArticle: "Create Article",
                    category: "Category:",
                    selectOp: "Select an option",
                    artTitle: "Article title:",
                    article: "Article:",
                    linkArtCover: "Link to the Article's Banner Image:",
                    emptyArticle: "Fill the title and content fields to publish the article",
                    errorSubmitArt: "An error has occured while trying to publish the article. Please try again later",
                },
            },
            "pt-BR": {
                translation: {
                    //miscelanous
                    save: "SALVAR",
                    madeWith: "Feito com",
                    byPhi: "por Phi4Free",
                    continue: "CONTINUAR",
                    close: "FECHAR",
                    back: "VOLTAR",
                    langSigle: "pt-BR",
                    cancel: "CANCELAR",
                    andConnective: "e",
                    orConnective: "ou",
                    blankInput: "Este campo não pode ficar vazio",
                    // error
                    notFound: "Página não encontrada",
                    errorAuth: "Ocorreu um erro de validação",
                    sessionExpired: "Sessão expirada",
                    sessionExpText:
                        "Faça login novamente para continuar de onde parou.",
                    goFrontPage: "Ou vá para a página inicial",
                    // Login
                    enter: "ENTRAR",
                    noAccount: "Não tem uma conta?",
                    register: "Faça o cadastro",
                    enterAsStudent: "ENTRAR COMO ESTUDANTE",
                    enterAsTeacher: "ENTRAR COMO PROFESSOR",
                    emailInput: "Email:",
                    passInput: "Senha: ",
                    forgotPass: "Esqueci a senha",
                    errorLogin1: "Email ou senha inválidos",
                    errorLogin2:
                        "Ocorreu um erro ao efetuar o login. Por favor, tente novamente mais tarde",
                    loginTerms1: "Ao fazer login, você concorda com os",
                    loginTerms2: "da plataforma.",
                    terms: "Termos de Uso",
                    privacy: "Política de Privacidade",
                    // password recover
                    passRecover: "Recuperação de senha",
                    passRecover1:
                        "Esqueceu a senha? Não se preocupe, vamos te enviar um email para ajudar a manter sua conta segura!",
                    passRecover2: "Digite o email da conta cadastrada:",
                    passRecoverEmail: "emailCadastrado@email.com",
                    sendEmail: "ENVIAR EMAIL",
                    //Sign in
                    registerStudent: "CRIAR CONTA DE ESTUDANTE",
                    registerTeacher: "TORNE-SE UM PROFESSOR DA PHI4FREE",
                    registerRules: "Regulamento de carreiras",
                    nameInput: "Nome Completo:",
                    confirmPassInput: "Confirme a senha:",
                    createAccount: "CRIAR CONTA",
                    yesAccount: "Já tem uma conta?",
                    login: "Faça o Login",
                    registerInfo:
                        "Compartilhe conteúdo útil e interessante para milhares de pessoas! Com nosso processo simplificado de inscrição, você pode gerar conhecimento do conforto de sua casa! Veja como é fácil:",
                    registerInfo1: "Acesse nosso",
                    carrers: "site de carreiras",
                    "registerInfo1.2":
                        "e selecione a disciplina que quer lecionar",
                    registerInfo2:
                        "Preencha o cadastro na plataforma e anexe seu currículo e links que possam mostrar um pouco do seu trabalho",
                    registerInfo3: "Envie tudo para avaliação e boa sorte!",
                    registerTerms1: "Ao fazer cadastro, você concorda com os",
                    registerTerms2:
                        "Para mais informações sobre os processos seletivos da plataforma, acesse nosso",
                    btnSubscribe: "QUERO ME INSCREVER",
                    errorRegister1: "As senhas são diferentes",
                    errorRegister2: "Erro de validação",
                    errorRegister3:
                        "Ocorreu um erro ao efetuar o cadastro. Por favor, tente novamente mais tarde",
                    errorRegister4: "Coloque seu nome para criar uma conta",
                    byPhi4Free: "da Phi4Free",
                    // Landing page
                    //Navbar
                    navWhat: "O que somos",
                    imStudent: "Sou Estudante",
                    imTeacher: "Sou Professor",
                    //Hero
                    heroTitle1: "Desperte seu",
                    heroTitle2: "potencial",
                    heroTitle3: "com educação.",
                    heroAbout:
                        "A Phi4Free é uma plataforma educacional gratuita, centrada em ensinar 4 pilares essenciais para o desenvolvimento pessoal, profissional e social das pessoas.",
                    //business
                    businessTitle: "Estude com qualidade",
                    businessPar1:
                        "A Phi4Free conta com professores altamente qualificados e uma curadoria de conteúdo impecável. Você terá acesso a uma comunidade de aprendizado única e inspiradora, com artigos, quizzes, desafios e fóruns para compartilhar suas dúvidas e descobertas com outros estudantes e professores.",
                    businessPar2:
                        "Você poderá aprender sobre assuntos que realmente importam, como como cuidar da sua saúde física e mental, como gerenciar suas finanças pessoais, como manter uma rotina funcional e saudável e até mesmo como desenvolver seu pensamento crítico e filosófico sobre as questões mais profundas da vida. E o melhor de tudo: Tudo isso de forma completamente gratuita!",
                    busItem1Title: "Professores qualificados",
                    busItem1Par:
                        "Selecionamos apenas profissionais comprovadamente especialistas para criarem conteúdos.",
                    busItem2Title: "Material confiável",
                    busItem2Par:
                        "Nossa equipe de curadoria possui um rígido processo de análise antes da publicação de um novo material.",
                    busItem3Title: "Compartilhe com os amigos",
                    busItem3Par:
                        "Compartilhe com os amigos nossos conteúdos e evoluam juntos nessa trajetória de conhecimento.",
                    //future
                    futureTitle: "Prepare-se para o futuro",
                    futurePar:
                        "Nossos professores são especialistas em suas áreas de atuação e estão sempre atualizados com as tendências e práticas mais recentes. E com a curadoria de conteúdo da Phi4Free, você tem certeza de que está recebendo informações confiáveis e precisas. Estude sem distrações, sem sair de casa.",
                    // pillars
                    pillarsTitle: "Nossos pilares",
                    pillarsPar:
                        "Viver uma vida equilibrada e plena requer uma abordagem holística que abrange diferentes áreas do conhecimento e habilidades práticas. O Phi4free abrangendo educação financeira, física, filosófica e funcional oferece uma jornada única para auxiliar a desenvolver competências fundamentais para uma vida saudável, equilibrada e satisfatória.",
                    //cta
                    ctaTitle: "E aí? Vamos começar?",
                    ctaPar: "Adquira conhecimento para construir uma base sólida para uma vida equilibrada, significativa e autêntica.",
                    //footer
                    lang: "Idioma:",
                    footerPar:
                        "Uma nova maneira de adquirir conhecimento de forma prática, fácil e confiável.",
                    usefulLinks: "Links Úteis",
                    aboutUs: "Quem Somos",
                    workUs: "Trabalhe Conosco",
                    support: "Apoie o Projeto",
                    courses: "Nossos cursos",
                    Financial: "Educação Financeira",
                    Philosophical: "Educação Filosófica",
                    Physical: "Educação Física",
                    Functional: "Educação Funcional",
                    contact: "Fale conosco",
                    // my profile
                    loadingProfile: "Carregando perfil...",
                    altEmail: "Alterar email",
                    altPass: "Alterar senha",
                    accSecurity: "Segurança & Conta",
                    logout: "Logout",
                    advancedOptions: "OPÇÕES AVANÇADAS",
                    unavailableOption:
                        "Desculpe! Esta opção ainda não está disponível",
                    //topbar my profile
                    ranking: "RANKING",
                    writeArticle: "ESCREVER ARTIGO",
                    store: "PHISTORE",
                    editProfile: "EDITAR PERFIL",
                    user404: "Usuário não encontrado",
                    interests: "Interesses",
                    teacher: "Professor(a)",
                    expand: "Expandir",
                    recoil: "Recolher",
                    //feed my profile
                    archieve: "Conquistas",
                    studyList: "Lista de estudo",
                    certificates: "Certificados",
                    published: "Artigos Publicados",
                    drafts: "Rascunhos",
                    feedError: "Ocorreu um erro ao buscar o feed",
                    feedEmpty: "Nada para mostrar",
                    //change email
                    differentEmail: "Os emails são diferentes",
                    emptyEmail: "O novo email não pode ficar vazio",
                    currentEmail: "Seu email atual é",
                    insertNewEmail: "Insira um novo email",
                    confirmEmail: "Confirme o email",
                    updateEmail: "ATUALIZAR EMAIL",
                    //change password
                    invalidPass: "Senha inválida",
                    currentPass: "Digite sua senha atual",
                    newPass: "Digite uma nova senha",
                    confirmNewPass: "Confirme a nova senha",
                    updatePass: "ATUALIZAR SENHA",
                    //logout
                    seeYouLater:
                        "Até mais tarde! Faça login novamente quando estiver pronto para continuar",
                    endSection: "ENCERRAR SESSÃO",
                    // home
                    financeTitle: "Finanças",
                    philosophyTitle: "Filosofia",
                    physicalTitle: "Fitness",
                    featureTitle: "Funcional",
                    author: "Autor:",
                    pubDate: "Data de publicação:",
                    discipline: "Disciplina:",
                    explore: "Explore, aprenda, evolua.",
                    welcome: "Seja bem-vindo(a)",
                    carlsagan:
                        "A busca pelo conhecimento é como abrir as janelas da mente para um mundo de possibilidades - Carl Sagan",
                    myList: "Minha lista",
                    // ler artigo
                    loadingArt: "Carregando artigo...",
                    // criar artigo
                    createArticle: "Criar Artigo",
                    category: "Categoria:",
                    selectOp: "Selecione uma opção",
                    artTitle: "Título do Artigo:",
                    article: "Artigo:",
                    linkArtCover: "Link da Imagem de Capa do Artigo:",
                    emptyArticle: "Preencha o artigo com um título e conteúdo para publicá-lo",
                    errorSubmitArt: "Ocorreu um erro ao publicar o artigo. Por favor, tente novamente mais tarde",
                },
            },
        },
    });

export default i18n;
