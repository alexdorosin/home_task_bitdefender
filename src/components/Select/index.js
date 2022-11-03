import "./Select.css";

function Select({ optionsList, ...props }) {
    return (
        <select {...props}>
            {optionsList?.map(({ name, value }) => (
                <option value={value} key={name}>
                    {name}
                </option>
            ))}
        </select>
    );
}

export default Select;
