import { Auth  } from '@cleeng/mediastore-sdk';
import HeaderAuthenticated from "./HeaderAuthenticated.jsx";
import HeaderUnauthenticated from "./HeaderUnauthenticated.jsx";

let userHeader = Auth.isLogged() ? <HeaderAuthenticated /> : <HeaderUnauthenticated />;

function Header() {
    return (
        <header className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Cleengflix</h1>
                {userHeader}
            </div>
        </header>
    )
}

export default Header;