// import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Checkout, store } from '@cleeng/mediastore-sdk';
import Modal from "./utils/Modal.jsx";
import Cleeng from "../services/Cleeng.js";

function CheckoutDialog({onClose, open = false}) {
    return (
        <Modal open={open} onClose={onClose}>
            <Provider store={store}>
                <Checkout offerId={Cleeng.offerId} />
            </Provider>
        </Modal>
    );
}

export default CheckoutDialog;
