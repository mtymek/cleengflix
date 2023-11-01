import { Auth  } from '@cleeng/mediastore-sdk';
import HeaderAuthenticated from "./HeaderAuthenticated.jsx";
import HeaderUnauthenticated from "./HeaderUnauthenticated.jsx";
import {useState} from "react";
// import LoginOverlay from "./LoginOverlay.jsx";

function Header() {
    let [authenticated, setAuthenticated] = useState(Auth.isLogged());

    return (
        <header className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Cleengflix</h1>
                {
                    authenticated ?
                        <HeaderAuthenticated onLogout={() => setAuthenticated(false)} />
                        : <HeaderUnauthenticated />
                }
            </div>

        </header>
    )
}

export default Header;