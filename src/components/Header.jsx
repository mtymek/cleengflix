import { Auth  } from '@cleeng/mediastore-sdk';
import HeaderAuthenticated from "./HeaderAuthenticated.jsx";
import HeaderUnauthenticated from "./HeaderUnauthenticated.jsx";
import {useState} from "react";
import CheckoutDialog from "./CheckoutDialog.jsx";
import Cleeng from "../services/Cleeng";

function Header() {
    let [authenticated, setAuthenticated] = useState(Auth.isLogged());
    let [isMember, setIsMember] = useState(false);
    let [showCheckoutDialog, setShowCheckoutDialog] = useState(false);

    if (Auth.isLogged()) {
        Cleeng.isEntitled().then((entitled) => {
            setIsMember(entitled);
        });
    }

    function updateMemberStatus() {
        setShowCheckoutDialog(false);
        setAuthenticated(Auth.isLogged());
        Cleeng.isEntitled().then((entitled) => {
            setIsMember(entitled);
        });
    }

    function logOut() {
        setAuthenticated(false);
        setIsMember(false)
    }

    return (
        <header className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex">
                    <img src={import.meta.env.BASE_URL + 'cleengflix.svg'} className="h-8 mr-2" alt="Cleengflix" />
                    <h1 className="text-2xl font-['Pacifico']">Cleengflix</h1>
                </div>
                <div className="flex items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                            onClick={() => setShowCheckoutDialog(true)}>
                        { isMember ? "Manage your membership" : "Subscribe" }
                    </button>

                    {
                        authenticated ?
                            <HeaderAuthenticated onLogout={logOut} />
                            : <HeaderUnauthenticated onLogin={updateMemberStatus} />
                    }
                </div>
            </div>

            <CheckoutDialog open={showCheckoutDialog} onClose={updateMemberStatus} />

        </header>
    )
}

export default Header;