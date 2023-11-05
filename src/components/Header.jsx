import { Auth  } from '@cleeng/mediastore-sdk';
import HeaderAuthenticated from "./HeaderAuthenticated.jsx";
import HeaderUnauthenticated from "./HeaderUnauthenticated.jsx";
import {useState} from "react";
import CheckoutDialog from "./CheckoutDialog.jsx";
import Cleeng from "../services/Cleeng";

function Header() {
    let [authenticated, setAuthenticated] = useState(Auth.isLogged());
    let [isMember, setIsMember] = useState(false);

    function updateMemberStatus() {
        Cleeng.isEntitled().then((entitled) => {
            setIsMember(entitled);
        });
    }

    function onLogin() {
        setAuthenticated(true);
        updateMemberStatus();
    }

    function showCheckout() {
        document.getElementById('checkout_dialog').showModal();
    }

    updateMemberStatus();

    return (
        <header className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex">
                    <img src={import.meta.env.BASE_URL + 'cleengflix.svg'} className="h-8 mr-1" alt="Cleengflix" />
                    <h1 className="text-2xl font-['Pacifico']">Cleengflix</h1>
                </div>
                <div className="flex items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                            onClick={showCheckout}>
                        { isMember ? "Manage your membership" : "Subscribe" }
                    </button>

                    {
                        authenticated ?
                            <HeaderAuthenticated onLogout={() => setAuthenticated(false)} />
                            : <HeaderUnauthenticated onLogin={onLogin} />
                    }
                </div>
            </div>

            <CheckoutDialog />

        </header>
    )
}

export default Header;