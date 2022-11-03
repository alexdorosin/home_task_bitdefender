import "./Modal.css";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { dropIn } from "./animations";

function Modal({ children, handleClose }) {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {children}
            </motion.div>
        </Backdrop>
    );
}

export default Modal;
