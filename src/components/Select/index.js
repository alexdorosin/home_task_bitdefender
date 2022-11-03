import "./Select.css";

function Select({ optionsList, ...props }) {
    return (
        <select {...props} className="select">
            {optionsList?.map(({ name, value }) => (
                <option value={value}>{name}</option>
            ))}
        </select>
    );
}

export default Select;
