import IconsGroup from "../IconsGroup";
import Select from "../Select";
import "./Header.css";
import { selectOptionsList } from "./selectOptionsList";

function Header() {
    return (
        <header className="header">
            <Select optionsList={selectOptionsList} />
            <IconsGroup />
        </header>
    );
}

export default Header;
