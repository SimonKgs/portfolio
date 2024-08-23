import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { Layout } from "./components";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}