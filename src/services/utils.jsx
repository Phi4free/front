import api from "./api";

export async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export async function fetchUserData() {
    try {
        let response = await api.get(`verMeuPerfil`);
        let body = await response.json();
        return { status: response.status, body };
    } catch (error) {
        console.log(error.message);
    }
}

export async function addUserToReadList(id) {
    try {
        let response = await api.put("adicionarNaLista", {
            _id: id,
        });
        return response.status;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export async function removeUserToReadList(id) {

    try {
        let response = await api.put("removerDaLista", {
            _id: id,
        });
        return response.status;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
