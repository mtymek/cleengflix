import {useState} from "react";
import LoginOverlay from "./LoginOverlay.jsx";

function HeaderUnauthenticated(props) {

    const [showLoginOverlay, setShowLoginOverlay] = useState(false);

    function login() {
        setShowLoginOverlay(false)
        props.onLogin();
    }

    return (
        <>
            <a href="#" className="text-gray-400 hover:text-white" onClick={() => setShowLoginOverlay(true)}>Sign In</a>
            {showLoginOverlay && (
                <LoginOverlay
                    onClose={() => setShowLoginOverlay(false)}
                    onSuccess={login}
                />
            )}
        </>
    )
}

export default HeaderUnauthenticated;