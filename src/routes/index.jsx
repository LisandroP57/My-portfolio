import React from "react";
import { Routes, Route } from "react-router-dom";
/*
import { Skills } from "../pages/Skills";
*/
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
{/*
      <Route path="/skills" element={<Skills />} /> */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    );
};
