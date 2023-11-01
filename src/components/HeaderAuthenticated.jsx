import Auth from '@cleeng/mediastore-sdk';

function HeaderAuthenticated() {
    return (
        <a href="#" className="text-gray-400 hover:text-white" onClick={Auth.logout()}>Sign Out</a>
    )
}

export default HeaderAuthenticated;