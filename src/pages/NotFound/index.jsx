import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../components/PrimaryButton";

export function NotFound() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="flex justify-center text-center flex-col h-full items-center bg-gradient-to-r from-transparent to-black/75">
            <h1 className="text-9xl">404</h1>
            <a>{t("notFound")}</a>
            <div className="w-1/5 py-8">
                <PrimaryButton
                    label={t("back")}
                    onClick={() => navigate("/")}
                />
            </div>
        </div>
    );
}
