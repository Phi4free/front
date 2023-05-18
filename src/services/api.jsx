import i18n from "../../i18n";

// Configurações de comunicação com api axios ou fetch
export const BASE_URL =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://back-phi4free.vercel.app/";

export default {
    baseUrl: BASE_URL,
    async get(url) {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Language: i18n.resolvedLanguage,
            },
        };
        return await fetch(this.baseUrl + url, options);
    },
    async post(url, body) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Language: i18n.resolvedLanguage,
            },
            body: JSON.stringify(body),
        };
        return await fetch(this.baseUrl + url, options);
    },
};
