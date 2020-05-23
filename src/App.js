import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleTabs from "./components/NavItems";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { green, orange } from "@material-ui/core/colors";

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={outerTheme}>
        <NavBar ></NavBar>
        <SimpleTabs></SimpleTabs>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
