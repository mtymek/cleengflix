import { useEffect, useRef } from "react";

function Modal({children, open = false, onClose}) {
    const ref = useRef(null)

    useEffect(() => {
        if (open) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [open]);

    function close() {
        ref.current?.close();
        onClose();
    }

    return (
        <dialog ref={ref} className="modal">
            <div className="modal-box">
                {open && children}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={close}>close</button>
            </form>
        </dialog>
    )
}

export default Modal;