// import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Checkout, store } from '@cleeng/mediastore-sdk';
import Modal from "./utils/Modal.jsx";

function CheckoutDialog({onClose, open = false}) {
    return (
        <Modal open={open} onClose={onClose}>
            <Provider store={store}>
                <Checkout offerId={import.meta.env.VITE_CLEENG_OFFER_ID} />
            </Provider>
        </Modal>
    );
}

export default CheckoutDialog;
