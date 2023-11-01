import { Auth  } from '@cleeng/mediastore-sdk';
import HeaderAuthenticated from "./HeaderAuthenticated.jsx";
import HeaderUnauthenticated from "./HeaderUnauthenticated.jsx";
import {useState} from "react";
import CheckoutDialog from "./CheckoutDialog.jsx";

function Header() {
    let [authenticated, setAuthenticated] = useState(Auth.isLogged());
    // let [showCheckoutOverlay, setShowCheckoutOverlay] = useState(false);

    function showCheckout() {
        document.getElementById('checkout_dialog').showModal();
    }

    return (
        <header className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Cleengflix</h1>
                <div className="flex items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={showCheckout}>Subscribe</button>
                    {
                        authenticated ?
                            <HeaderAuthenticated onLogout={() => setAuthenticated(false)} />
                            : <HeaderUnauthenticated onLogin={() => setAuthenticated(true)} />
                    }
                </div>
            </div>

            <CheckoutDialog />

        </header>
    )
}

export default Header;