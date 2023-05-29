import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ErroText from "../../../components/ErroText";
import SideMenu from "../../../components/SideMenu";
import DinamicInput from "../../../components/DinamicInput";
import { ContainerInput, CentralizedContainer, LinkText } from "../style";
import Toast from "../../../components/Toast";

export function AlterarSenhaStep2(props) {
    const { open, setOpen } = props;
    const { t } = useTranslation();

    const [senhaPopup, setSenhaPopup] = useState(false);

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setconfirmNewPassword] = useState("");
    const [erros, setErros] = useState(null);

    useEffect(() => {
        if (newPassword != confirmNewPassword && confirmNewPassword != "") {
            // define erros
        } else {
            setErros(null);
        }
    }, [newPassword, confirmNewPassword]);

    const handleNewPassword = (e) => {
        e.preventDefault();
        setNewPassword(e.target.value);
    };

    const handleConfirmNewPassword = (e) => {
        e.preventDefault();
        setconfirmNewPassword(e.target.value);
    };

    return (
        <>
        <SideMenu
            title="ALTERAR SENHA"
            options={null}
            open={open}
            setOpen={setOpen}
        >
            <div className="text-gray-500">
                <a>Digite uma nova senha:</a>
                <br />
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
                <br />
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
            {erros != null ? (
                <ErroText iconName="circle-exclamation" label={erros} />
            ) : null}
            <button
                className="inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
                onClick={() => setSenhaPopup(!senhaPopup)}
            >
                ATUALIZAR SENHA
            </button>
        </SideMenu>
        <Toast open={senhaPopup} setOpen={setSenhaPopup} message="Senha não foi alterada ainda..."/>
    </>
    );
}