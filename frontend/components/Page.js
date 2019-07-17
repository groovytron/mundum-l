import React, { Component } from "react";
import Meta from "./Meta";
import Header from "./Header";
import CssBaseline from '@material-ui/core/CssBaseline';

const Page = props => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Meta />
        <Header />
        {props.children}
      </React.Fragment>
    </div>
  );
};

export default Page;