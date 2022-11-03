import "./Button.css";

function Button({ type, children, ...props }) {
    return (
        <button className={`${type}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
