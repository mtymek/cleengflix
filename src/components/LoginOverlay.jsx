// import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Login, Register, store } from '@cleeng/mediastore-sdk';
import {useState} from "react";

function LoginOverlay(props) {

    let [subscreen, setSubscreen] = useState("login");

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
            <div className="w-1/2">
                <Provider store={store}>
                    { subscreen === 'register'
                        ? <Register
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
        </div>
    );
}

export default LoginOverlay;
