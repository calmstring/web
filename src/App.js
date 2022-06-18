import React from "react";

import { Routes, Route } from "react-router-dom";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { Home } from "./pages";
import { Navbar, Footer } from "./layouts";

const theme = createTheme({});

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </MuiThemeProvider>
    </>
  );
}

export default App;
