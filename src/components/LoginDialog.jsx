// import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {Login, Register, store} from '@cleeng/mediastore-sdk';
import {useState} from "react";
import Modal from "./utils/Modal.jsx";
import Cleeng from "../services/Cleeng.js";

function LoginDialog({open, onClose, onSuccess}) {

    let [subscreen, setSubscreen] = useState("login");

    return (
        <Modal open={open} onClose={onClose}>
            <Provider store={store}>
                { subscreen === 'register'
                    ? <Register
                        offerId={Cleeng.offerId}
                        onHaveAccountClick={() => setSubscreen('login')}
                        onSuccess={onSuccess}
                    />
                    : <Login
                        onRegisterClick={() => setSubscreen('register')}
                        onSuccess={onSuccess}
                    />
                }
            </Provider>
        </Modal>
    );
}

export default LoginDialog;
