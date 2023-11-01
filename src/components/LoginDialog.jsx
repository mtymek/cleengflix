// import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {Login, Register, store} from '@cleeng/mediastore-sdk';
import {useState} from "react";

function LoginDialog(props) {

    let [subscreen, setSubscreen] = useState("login");

    return (
        <dialog id="login_dialog" className="modal">
            <div className="modal-box">
                <Provider store={store}>
                    { subscreen === 'register'
                        ? <Register
                            offerId={import.meta.env.VITE_CLEENG_OFFER_ID}
                            onHaveAccountClick={() => setSubscreen('login')}
                            onSuccess={props.onSuccess}
                        />
                        : <Login
                            onRegisterClick={() => setSubscreen('register')}
                            onSuccess={props.onSuccess}
                        />
                    }
                </Provider>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}

export default LoginDialog;
