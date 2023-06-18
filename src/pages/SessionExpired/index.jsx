import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
import PrimaryButton from "../../components/PrimaryButton";

export function SessionExpired() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <div className="m-auto flex flex-col w-80 text-center">
                <br/><br/>
                <strong>{t("sessionExpired")}</strong>
                <br />
                {t("sessionExpText")}
                <PrimaryButton
                    label={t("login").toUpperCase()}
                    onClick={() => {
                        navigate("/login-estudante");
                    }}
                />
                <br/>
                <button
                className="border-1 border-solid border-primary hover:border-transparent px-4 py-2 text-sm text-primary"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    {t("goFrontPage").toUpperCase()}
                </button>
            </div>
        </>
    );
}
