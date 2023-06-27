import api from "../../services/api";

export async function fetchArticlesList() {
    try {
        let response = await api.get("listaArtigos");
        let body = await response.json();
        return {status: response.status, body};
    } catch (error) {
        console.log(error.message);
    }
}
