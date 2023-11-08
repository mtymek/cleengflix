import LoginDialog from "./LoginDialog.jsx";
import {useState} from "react";

function HeaderUnauthenticated({onLogin}) {

    let [showLoginDialog, setShowLoginDialog] = useState(false);

    function login() {
        onLogin();
        closeLoginDialog();
    }

    function closeLoginDialog() {
        setShowLoginDialog(false);
    }

    return (
        <>
            <a href="#" className="text-gray-400 hover:text-white" onClick={() => setShowLoginDialog(true)}>Sign In</a>
            <LoginDialog
                open={showLoginDialog}
                onClose={closeLoginDialog}
                onSuccess={login}
            />
        </>
    )
}

export default HeaderUnauthenticated;