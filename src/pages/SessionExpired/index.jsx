import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";

export function SessionExpired() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            {t("sessionExpired")}
            {t("sessionExpText")}
            <br />
            <br />
            <button
                onClick={() => {
                    navigate("/login-estudante");
                }}
            >
                {t("login")}
            </button>
        </>
    );
}
