import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ErroText from "../../../components/ErroText";
import SideMenu from "../../../components/SideMenu";
import DinamicInput from "../../../components/DinamicInput";
import BasicInput from "../../../components/BasicInput";
import {ContainerInput} from "../style";

export function AlterarSenha(props) {
    const { open, setOpen } = props;
    const { t } = useTranslation();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setconfirmNewPassword] = useState("");
    const [erros, setErros] = useState(null);

    useEffect(() => {
        if (newPassword != confirmNewPassword && confirmNewPassword != "") {
           // setErros("Os emails são diferentes");
        } else {
            setErros(null);
        }
    }, [newPassword, confirmNewPassword]);

    const handleCurrentPassword = (e) => {
        e.preventDefault();
        setCurrentPassword(e.target.value);
    }

    const handleNewPassword = (e) => {
        e.preventDefault();
        setNewPassword(e.target.value);
    };

    const handleConfirmNewPassword = (e) => {
        e.preventDefault();
        setconfirmNewPassword(e.target.value);
    };

    return (
    <SideMenu
        title="ALTERAR SENHA"
        options={null}
        open={open}
        setOpen={setOpen}
    >
        <div className="text-gray-500">
                    <a>Digite sua senha atual:</a>
                    <br/>
                    <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-current"
                        onInput={handleCurrentPassword}
                        label={null}
                    />
                    </ContainerInput>
                    <br />
                    <a>Digite uma nova senha:</a>
                    <br/>
                    <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-new"
                        onInput={handleNewPassword}
                        label={null}
                    />
                    </ContainerInput>
                    <br />
                    <a>Confirme a nova senha:</a>
                    <br/>
                    <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-new-confirm"
                        onInput={handleConfirmNewPassword}
                        label={null}
                    />
                    </ContainerInput>
                    <br />
                    
                </div>
                <button
                    className="inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
                    onClick={() => console.log("update password")}
                >
                    ATUALIZAR SENHA
                </button>
    </SideMenu>)
}