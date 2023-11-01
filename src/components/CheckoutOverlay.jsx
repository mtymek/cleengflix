// import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Checkout, Config, store } from '@cleeng/mediastore-sdk';

function LoginOverlay() {

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
            <div className="w-1/2">
                <Provider store={store}>
                    <Checkout offerId={import.meta.env.VITE_CLEENG_OFFER_ID} />
                </Provider>
            </div>
        </div>
    );
}

export default LoginOverlay;
