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

    Name: Core:Core.js
    Author: Daniel Hyders <git@danny.works>
*/


import "./css/Core.css";
import "./css/Pages.css";

import { BrowserView, MobileView } from "react-device-detect";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

import UniHeader from "./componentry/UniHeader/Index.jsx";
import Mobile from "./componentry/Mobile/Index.jsx";

import PageHome from "./router/Home.jsx";
import PageFallback from "./router/Fallback.jsx";

function UniBody() {
  return (
    <div>
      <UniHeader />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="Core">
      <BrowserView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UniBody />}>
              <Route index element={<PageHome />} />
              <Route path="*" element={<PageFallback />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </div>
  );
}

export default App;
