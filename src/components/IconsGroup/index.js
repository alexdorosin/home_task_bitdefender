import "./IconsGroup.css";
import { ReactComponent as GiftIcon } from "../../svg/gift.svg";
import { ReactComponent as FaqIcon } from "../../svg/question.svg";
import { ReactComponent as NotificationsIcon } from "../../svg/bell.svg";

function IconsGroup() {
    return (
        <section className="container">
            <GiftIcon />
            <FaqIcon />
            <NotificationsIcon className="notifications" />
        </section>
    );
}

export default IconsGroup;
