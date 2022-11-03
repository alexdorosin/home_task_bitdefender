import "./DashboardContent.css";
import { ReactComponent as IllustrationIcon } from "../../svg/illustration.svg";
import Button from "../../components/Button";
import { useState } from "react";
import CreateReportModal from "../CreateReportModal";

function DashboardContent() {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <section className="wrapper">
            <IllustrationIcon />
            <h3 className="heading">Start creating reports</h3>
            <p>You don't have any reports defined yet</p>

            <Button type="primary" onClick={open}>
                CREATE REPORT
            </Button>

            <CreateReportModal modalOpen={modalOpen} close={close} />
        </section>
    );
}

export default DashboardContent;
