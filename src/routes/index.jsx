import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
/* import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact"; */
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
{/*   <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectView />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    );
};
