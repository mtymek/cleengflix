import {useState} from "react";
import LoginOverlay from "./LoginOverlay.jsx";

function HeaderUnauthenticated() {

    const [showLoginOverlay, setShowLoginOverlay] = useState(false);

    return (
        <>
            <a href="#" className="text-gray-400 hover:text-white" onClick={() => setShowLoginOverlay(true)}>Sign In</a>
            {showLoginOverlay && (
                <LoginOverlay onClose={() => setShowLoginOverlay(false)}/>
            )}
        </>
    )
}

export default HeaderUnauthenticated;