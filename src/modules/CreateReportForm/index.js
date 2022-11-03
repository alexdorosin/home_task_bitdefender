import CheckboxInputGroup from "../../components/CheckboxInputGroup";
import FormSelect from "../../components/FormSelect";
import Heading from "../../components/Heading";
import RadioInputGroup from "../../components/RadioInputGroup";
import TextInput from "../../components/TextInput";
import "./CreateReportForm.css";

function CreateReportForm() {
    return (
        <form className="form">
            <Heading title="Details" />

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

            <Heading title="Settings" />

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
