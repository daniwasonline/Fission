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
