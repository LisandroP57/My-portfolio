import React from "react";
import { Routes, Route } from "react-router-dom";
/*
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";
*/
import About from "../pages/About";
import Contact from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
{/*
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} /> */}
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    );
};
