import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";

export function Perfil() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
        <h1>Aqui será construído o perfil do usuário</h1>
        <p>Começando pelas configurações principais...</p>
        </>
    );
}
