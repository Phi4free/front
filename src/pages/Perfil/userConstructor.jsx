import i18n from "../../../i18n";
import api from "../../services/api";
/**
 * TO DO:
 * Coloque uma validação: Se o id do usuário requisitado é diferente do usuário requisitante:
 * NÃO retorne dados sensíveis! Esses dados devem ficar restritos para o holder desses dados.
 */

let uRole = null;
let u_id = null;
let uNome = null;
let uEmail = null;
let uNumArt = 0;
let uNotas = [];
let uDataIni = null;
let u__v = 0;

export function fetchUserData() {
    api.get(
        "verPerfil?id=64663c1a847bbfbcf7a02ab6",
        localStorage.getItem("token")
    )
        .then((response) => {
            response.json().then((_data) => {
                if (_data.message == "OK") {
                    uRole = _data.data.role;
                    u_id = _data.data._id;
                    uNome = _data.data.nome;
                    uEmail = _data.data.email;
                    uNumArt = _data.data.numArt;
                    uNotas = _data.data.notas;
                    uDataIni = _data.data.dataIni;
                    u__v = _data.data.__v;
                } else {
                    console.log(_data.message);
                }
            });
        })
        .catch((error) => {
            console.log(error.message);
        });

    return {
        role: uRole,
        _id: u_id,
        nome: uNome,
        email: uEmail,
        numArt: uNumArt,
        notas: uNotas,
        dataIni: uDataIni,
        __v: u__v,
    };
}
