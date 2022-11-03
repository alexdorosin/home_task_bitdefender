import "./TextInput.css";

function TextInput({ type, name, id, placeholder }) {
    return (
        <div className="input-wrapper">
            <label htmlFor={name}>
                {name}
                <span>*</span>
            </label>
            <input type={type} name={name} id={id} placeholder={placeholder} />
        </div>
    );
}

export default TextInput;
