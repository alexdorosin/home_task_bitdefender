import CheckboxInputGroup from "../../components/CheckboxInputGroup";
import FormSelect from "../../components/FormSelect";
import RadioInputGroup from "../../components/RadioInputGroup";
import TextInput from "../../components/TextInput";
import "./CreateReportForm.css";

function CreateReportForm() {
    return (
        <form className="form">
            <h4 className="subheading">Details</h4>
            <div className="field-wrapper">
                <FormSelect
                    id="type"
                    name="Type"
                    options={["Executive Summary", "Other"]}
                />

                <FormSelect
                    id="company"
                    name="Company"
                    options={["Company name", "Other"]}
                />

                <TextInput
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Placeholder"
                />
            </div>

            <h4>Settings</h4>

            <RadioInputGroup />

            <div className="field-wrapper">
                <FormSelect
                    id="reporting_interval"
                    name="Reporting interval"
                    options={["Last 7 days", "Last Month", "Last Year"]}
                />
            </div>

            <CheckboxInputGroup />
        </form>
    );
}

export default CreateReportForm;
