import "./Navbar.css";
import { ReactComponent as ExpandIcon } from "../../svg/expand-button.svg";
import { menuItemsList } from "./menuItemsList";

function Navbar() {
    return (
        <nav className="navbar">
            <span className="expand">
                <ExpandIcon />
            </span>

            <ul className="navbar-nav">
                {menuItemsList?.map(({ name, svg }) => (
                    <li
                        className="nav-item"
                        key={name}
                        onClick={() =>
                            console.log(`${name} menu will be available soon.`)
                        }
                    >
                        <div className="nav-link">
                            {svg}
                            <span className="link-text">{name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
