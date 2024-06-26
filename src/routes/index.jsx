import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    );
};
