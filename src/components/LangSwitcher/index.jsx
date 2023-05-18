import { useTranslation } from "react-i18next";

export function LangSwitcher() {
    const { t, i18n } = useTranslation();

    const lngs = {
        en: { nativeName: "English" },
        "pt-BR": { nativeName: "Português Brasileiro" },
    };
    return (
        <div className="flex">
            <p>{t('lang')}</p>
            <select 
            className="mx-4"
            onInput={(e) => i18n.changeLanguage(e.target.value)}
            >
                {Object.keys(lngs).map((lng) => (
                    <option
                    className="text-center"
                        key={lng}
                        selected={i18n.resolvedLanguage === lng}
                        style={{
                            fontWeight:
                                i18n.resolvedLanguage === lng
                                    ? "bold"
                                    : "normal",
                        }}
                        value={lng}
                    >
                        {lngs[lng].nativeName}
                    </option>
                ))}
            </select>
        </div>
    );
}
