import { UHUniNav, UHUniNavItem, UHUniNavLogo } from "./UHUtil.jsx";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="Header Uni-Header">
            <UHUniNavLogo height="100vh" />
            <UHUniNav>
                <UHUniNavItem first>
                    <Link to="/">Home</Link>
                </UHUniNavItem>
            </UHUniNav>
        </nav>
    );
};