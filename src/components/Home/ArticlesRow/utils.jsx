import api from "../../../services/api";

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
