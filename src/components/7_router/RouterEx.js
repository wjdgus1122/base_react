import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ExHeader } from "./exroutes/ExHeader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu_1 } from "./exroutes/Menu_1";
import { Menu_2 } from "./exroutes/Menu_2";
import { ExHome } from "./exroutes/ExHome";
import { ExFooter } from "./exroutes/ExFooter";

export const RouterEx = () => {
  return (
    <Router>
      <ExHeader />
      <Routes>
        <Route path="/" element={<ExHome />} />
        <Route path="/menu_1" element={<Menu_1 />} />
        <Route path="/menu_2" element={<Menu_2 />} />
      </Routes>
      <ExFooter />
    </Router>
  );
};
