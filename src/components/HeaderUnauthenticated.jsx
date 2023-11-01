import LoginDialog from "./LoginDialog.jsx";

function HeaderUnauthenticated(props) {
    props = {
        ...{
            onLogin: () => {}
        },
        ...props
    };

    function login() {
        props.onLogin();
        closeLoginDialog();
    }

    function showLoginDialog() {
        document.getElementById('login_dialog').showModal();
    }
    function closeLoginDialog() {
        document.getElementById('login_dialog').click();
    }

    return (
        <>
            <a href="#" className="text-gray-400 hover:text-white" onClick={showLoginDialog}>Sign In</a>
            <LoginDialog
                onClose={closeLoginDialog}
                onSuccess={login}
            />
        </>
    )
}

export default HeaderUnauthenticated;