import { Auth } from '@cleeng/mediastore-sdk';
import getCustomer from '@cleeng/mediastore-sdk/dist/api/Customer/getCustomer';
import {useState} from "react";

function HeaderAuthenticated(props) {
    function logout() {
        Auth.logout();
        props.onLogout();
    }

    let [userName, setUserName] = useState("...");

    getCustomer().then((customer) => {
        setUserName(customer.responseData.email);

    });

    return (
        <div className="flex items-center">
            <span className="text-gray-400 mr-4">Welcome, {userName}</span>
            <a href="#" className="text-gray-400 hover:text-white" onClick={logout}>Sign Out</a>
        </div>
    )
}

export default HeaderAuthenticated;