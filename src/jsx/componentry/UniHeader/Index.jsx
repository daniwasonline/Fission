/*
    Copyright (C) 2021 MineRIP, Daniel Hyders, Bunni <https://mine.rip>
    This file is part of Fission, the frontend component of Nexus.

    Fission is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Fission is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License

    Name: UniHeader:Index.jsx
    Author: Daniel Hyders <git@danny.works>
*/

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