import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
import FlyoutMenu from "../../components/FlyoutMenu";

export function Perfil() {
    // TO DO: Remember to translate do english all the static content from this page
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showAdvancedMenu, isShowAdvancedMenu] = useState(false)

    return (
        <>
        <br/>
            <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => isShowAdvancedMenu(true)}
            >
                Opções avançadas
            </button>
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnprimary"
                onClick={() => console.log("Editar perfil")}
            >
                Editar
            </button>
            {
                showAdvancedMenu ?
                <FlyoutMenu id="advanced-menu"/>
                : null
            }
        </>
    );
}
