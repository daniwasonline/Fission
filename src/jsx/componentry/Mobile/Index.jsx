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

    Name: Mobile:Index.jsx
    Author: Daniel Hyders <git@danny.works>
*/

import Logo from "../Util/Logo.jsx";
export default function Mobile() {
    return (
        <div className="Mobile">
            <Logo height="200vh" />
            <h1 className="Header">Sorry.</h1>
            <p style={{ paddingLeft: "5%", paddingRight: "5%" }}>Nexus does not support mobile browsers at this time due to limitations with screen real estate on mobile devices. <br /> <br /> If you have a mobile device that can comfortably access desktop versions of websites, or if you would otherwise like to access the site (knowing the risks), feel free to enable desktop mode for this site.</p>
        </div>
    );
};