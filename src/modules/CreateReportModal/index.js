import "./CreateReportModal.css";
import Modal from "../../components/Modal";
import { AnimatePresence } from "framer-motion";
import { ReactComponent as CloseIcon } from "../../svg/close.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import CreateReportForm from "../CreateReportForm";

function CreateReportModal({ modalOpen, close }) {
    const notify = () =>
        toast.success("Successfully saved the report", {
            position: "bottom-right",
            theme: "colored",
            hideProgressBar: true,
            autoClose: 3000,
        });

    return (
        <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
        >
            {modalOpen && (
                <Modal handleClose={close}>
                    <div className="modal-container">
                        <div className="modal-header">
                            <h3>Create Report</h3>
                            <CloseIcon className="close-icon" onClick={close} />
                        </div>
                        <CreateReportForm />
                        <div className="modal-footer">
                            <Button type="primary" onClick={notify}>
                                SAVE
                            </Button>
                            <Button type="secondary" onClick={close}>
                                CLOSE
                            </Button>
                        </div>
                        <ToastContainer className="toast-position" />
                    </div>
                </Modal>
            )}
        </AnimatePresence>
    );
}

export default CreateReportModal;
