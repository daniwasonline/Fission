import "./css/Core.css";
import "./css/Nav.css";
import "./css/Pages.css";
import Body from "./componentry/snippets/BodyTag.jsx";
import NavBar from "./componentry/snippets/NavBar";
import { Outlet, Routes, Route } from "react-router-dom";

import PageHome from "./router/Home.jsx";
import PageNotFound from "./router/PageNotFound.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultRoute />}>
          <Route index element={<PageHome />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function DefaultRoute() {
  return (
    <div>
      <NavBar />
      <Body>
        <Outlet />
      </Body>
    </div>
  );
}

export default App;
