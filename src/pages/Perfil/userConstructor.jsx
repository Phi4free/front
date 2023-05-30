import i18n from "../../../i18n";
import { useState } from "react";
import api from "../../services/api";
/**
 * TO DO:
 * Coloque uma validação: Se o id do usuário requisitado é diferente do usuário requisitante:
 * NÃO retorne dados sensíveis! Esses dados devem ficar restritos para o holder desses dados.
 */

// const [uRole, setRole] = useState(null);
// const [u_id, set_id] = useState(null);
// const [uNome, setNome] = useState(null);
// const [uEmail, setEmail] = useState(null);
// const [uNumArt, setNumArt] = useState(null); // def. 0
// const [uNotas, setNotas] = useState(null); // def. []
// const [uDataIni, setDataIni] = useState(null);
// const [u__v, setV] = useState(null); // def. 0

export function fetchUserData() {
    api.get(
        "verPerfil?id=64663c1a847bbfbcf7a02ab6",
        localStorage.getItem("token")
    )
        .then((response) => {
            response.json().then((_data) => {
                if (_data.message == "OK") {
                    console.log(_data.data.email);
                } else {
                    console.log(_data.message);
                }
            });
        })
        .catch((error) => {
            console.log(error.message);
        });

 //   return user;
}

// const user = {
//     role: uRole,
//     _id: u_id,
//     nome: uNome,
//     email: uEmail,
//     numArt: uNumArt,
//     notas: uNotas,
//     dataIni: uDataIni,
//     __v: u__v,
// };
