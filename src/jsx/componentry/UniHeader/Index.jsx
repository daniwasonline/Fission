import { UHUniNav, UHUniNavItem, UHUniNavLogo } from "./UHUtil.jsx";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="Header Uni-Header">
            <div className="Uni-Header-Blur" />
            <UHUniNavLogo height="100vh" className="Uni-Header-NavLogo" />
            <UHUniNav>
                <UHUniNavItem first>
                    <Link to="/">Home</Link>
                </UHUniNavItem>
                <UHUniNavItem>
                <a href="https://buy.mine.rip" target="_blank" rel="noreferrer noopener">Store</a>
                </UHUniNavItem>
            </UHUniNav>
        </nav>
    );
};