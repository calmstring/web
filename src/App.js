import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

//import { ThemeProvider } from "emotion-theming";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({});

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MuiThemeProvider>
    </>
  );
}


function filtr() {

}

function sale() {

}

export default App;
