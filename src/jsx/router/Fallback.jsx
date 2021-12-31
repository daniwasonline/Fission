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

    Name: PagesCore:Fallback.jsx
    Author: Daniel Hyders <git@danny.works>
*/

export default function Fallback() {
    return (
        <div className="Fallback">
            <h1 style={{ fontSize: "500%", paddingLeft: "10%", paddingRight: "10%" }}>404.</h1>
            <p style={{ fontSize: "150%", paddingLeft: "10%", paddingRight: "10%", marginTop: "-1.5%" }}>The page you were looking for couldn't be found. Try re-entering the URL belonging to the page that you were looking for, or <a href="/">go home</a>.</p>
        </div>
    );
};