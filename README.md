# 🌐 Como usar o componente LangSwitcher
Para trocar o idioma do conteúdo exibido na tela

Abra o arquivo da página que vai adicionar o componente de mudança de idioma;
Importe :
```
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
```

Instancie o useTranslation como t :
```
const { t } = useTranslation();
```

Troque os textos estáticos por sua referência que está no arquivo i18n.js:
i18n.js
```
errorLogin1: "Invalid email or password",
```
(...)
```
errorLogin1: "Email ou senha inválidos",
```
index.js
```
setErros("Email ou senha inválidos"); → setErros(t("errorLogin1"));
```

Adicione o componente do LangSwitcher na página:
```
<LangSwitcher/>
```

PRONTO!

=========================================================================================

# default

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
