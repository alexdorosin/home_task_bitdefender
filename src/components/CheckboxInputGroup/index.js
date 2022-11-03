import "./CheckboxInputGroup.css";

function CheckboxInputGroup() {
    return (
        <div className="field-wrapper">
            <div className="checkbox-field-container">
                <label htmlFor="attach_files">Attach files</label>
                <div className="checkbox-group">
                    <div className="display-flex">
                        <input
                            name="attach_files"
                            id="pdf"
                            type="checkbox"
                            value="Dashboard PDF"
                        />
                        <label htmlFor="attach_files">Dashboard PDF</label>
                    </div>
                    <div className="display-flex">
                        <input
                            name="attach_files"
                            id="csv"
                            type="checkbox"
                            value="Details as CSV"
                        />
                        <label htmlFor="attach_files">Details as CSV</label>
                    </div>
                    <div className="display-flex">
                        <input
                            name="attach_files"
                            id="archive"
                            type="checkbox"
                            value="Archive files"
                        />
                        <label htmlFor="attach_files">Archive files</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckboxInputGroup;
