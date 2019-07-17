import React from "react";
import App, { Container } from "next/app";
import Page from "../components/Page";
import Box from "@material-ui/core/Box";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Box padding="0.5rem">
            <Component />
          </Box>
        </Page>
      </Container>
    );
  }
}

export default MyApp;
