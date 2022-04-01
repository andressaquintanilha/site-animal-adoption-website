import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default class AnimalAdoption extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
