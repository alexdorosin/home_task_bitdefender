import "./FormSelect.css";

function FormSelect({ name, id, options }) {
    return (
        <div className="field-container">
            <label htmlFor={name}>{name}</label>
            <select name={name} id={id}>
                {options?.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default FormSelect;
