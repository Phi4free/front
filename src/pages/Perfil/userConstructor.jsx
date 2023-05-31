import i18n from "../../../i18n";
import api from "../../services/api";

export async function fetchUserData() {
    try {
        let response = await api.get(`verMeuPerfil`);
        response = await response.json();
        if (response.message == 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error.message);
    }
}
