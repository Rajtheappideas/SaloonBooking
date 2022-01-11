import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// components
import { Home, Error404, Signin, Signup, TermsAndCondition } from "./index";
import { Navbar, Footer } from "../Components/index";

const Routing = () => {
  const routes = [
    { url: "", element: Home },
    // { url: "signin", element: Signin },
    // { url: "signup", element: Signup },
    // { url: "terms&conditions", element: TermsAndCondition },
    { url: "*", element: Error404 },
  ];
  return (
    <Fragment>
      <Navbar />
      <Routes>
        {routes.map((data, i) => (
          <Route key={i} exact path={`/${data.url}`} element={data.element} />
        ))}
      </Routes>
      <Footer />
    </Fragment>
  );
};
export default Routing;
