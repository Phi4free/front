import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../../components/SideMenu";


export function Logout(props) {
    const { open, setOpen } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        navigate("/", {state:null, replace:true});
    }
    
    return (<SideMenu
        title={t('logout')}
        options={null}
        open={open}
        setOpen={setOpen}
    >
        <div className="text-center text-gray-500 px-2">
            <p>{t('seeYouLater')}</p>
            <br />
        </div>
        <button
            className="w-9/12 inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
            onClick={() => handleLogout()}
        >
            {t('endSection')}
        </button>
    </SideMenu>);
}
