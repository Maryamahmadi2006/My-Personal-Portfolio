import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

/**
 * HashRouter keeps every route inside the URL fragment (/#/work), which lets
 * the site be hosted from any static host — including GitHub Pages — without a
 * server-side rewrite rule.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
