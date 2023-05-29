import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../../components/SideMenu";


export function Logout(props) {
    const { open, setOpen } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        //navigate("/", {state:null, replace:true});
        navigate(-1);
    }
    
    return (<SideMenu
        title="LOGOUT"
        options={null}
        open={open}
        setOpen={setOpen}
    >
        <div className="text-center text-gray-500">
            <p>Até mais tarde! Faça login novamente quando estiver pronto para continuar</p>
            <br />
        </div>
        <button
            className="inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
            onClick={() => handleLogout()}
        >
            ENCERRAR SESSÃO
        </button>
    </SideMenu>);
}
