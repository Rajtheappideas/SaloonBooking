import React from "react";
import { MetaTags } from "react-meta-tags";

const Error404 = () => {
  return (
    <>
      <MetaTags>
        <title>Error 404</title>
      </MetaTags>
      <h1 className="text-9xl">Sorry page not found!</h1>);
    </>
  );
};

export default Error404;
