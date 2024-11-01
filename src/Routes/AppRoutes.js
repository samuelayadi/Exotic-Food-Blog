import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Recipie, RecipieDetails } from "../Pages";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="recipie" Component={Recipie} />
          <Route path="recipie/:id" Component={RecipieDetails} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
