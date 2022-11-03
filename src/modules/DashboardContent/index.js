import "./DashboardContent.css";
import { ReactComponent as IllustrationIcon } from "../../svg/illustration.svg";
import Button from "../../components/Button";
import { useState } from "react";
import Modal from "../../components/Modal";
import { AnimatePresence } from "framer-motion";

function DashboardContent() {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <section className="wrapper">
            <IllustrationIcon />
            <h3>Start creating reports</h3>
            <p>You don't have any reports defined yet</p>
            <Button type="primary" onClick={open}>
                CREATE REPORT
            </Button>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modalOpen && (
                    <Modal text={"Create Report"} handleClose={close} />
                )}
            </AnimatePresence>
        </section>
    );
}

export default DashboardContent;
