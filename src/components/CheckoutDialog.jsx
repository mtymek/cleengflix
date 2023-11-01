// import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Checkout, Config, store } from '@cleeng/mediastore-sdk';

function CheckoutDialog() {

    return (
        <dialog id="checkout_dialog" className="modal">
            <div className="modal-box">
                <Provider store={store}>
                    <Checkout offerId={import.meta.env.VITE_CLEENG_OFFER_ID} />
                </Provider>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}

export default CheckoutDialog;
