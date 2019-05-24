import React, { Fragment } from "react";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar";

const src = () => (
  <Fragment>
    <GlobalStyle />
    <Sidebar />
  </Fragment>
);

export default src;
