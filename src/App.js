import React from "react";

<<<<<<< HEAD
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
=======
function App() {
  return (
    <div className="App">
      Calmstring
    </div>
>>>>>>> parent of 30e1ed5... zrobiłem stronę główną ale coś się popsuło icony i nie wiem jak dlaej to zrobić
  );
}

export default App;
