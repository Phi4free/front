import i18n from "../../../i18n";
import api from "../../services/api";

export async function fetchUserData() {
    try {
        let response = await api.get(`verMeuPerfil`);
        let body = await response.json();
        return {status: response.status, body};
    } catch (error) {
        console.log(error.message);
    }
}
