import { AppBar, Toolbar, Typography } from "@mui/material";

import { MuiMediaQuery } from "../components";

const Navbar = () => {
  return (
    <>
      <MuiMediaQuery match="desktop">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" py={1}>
              Calmstring for Desktop
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiMediaQuery>
      <MuiMediaQuery match="tablet">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" py={1}>
              Calmstring for Tablet
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiMediaQuery>
      <MuiMediaQuery match="mobile">{null}</MuiMediaQuery>
    </>
  );
};

export default Navbar;
