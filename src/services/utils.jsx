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
        return {status: response.status, body};
    } catch (error) {
        console.log(error.message);
    }
}

export async function updateUserToReadList(id) {
    await api
        .put("atualizarLista", {
            _id: id,
        })
        .then((response) => {
            response.json().then(() => {
                if (response.status == 200) return true;
                return false;
            });
        })
        .catch((error) => {
            console.log(error.message);
            return false;
        });
}