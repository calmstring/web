import { useState } from "react";
import { BottomNavigation, Box, Paper } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

import { MuiMediaQuery } from "../components";

const CalmstringBottomNavigation = () => {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Notifications"
          value="nofications"
          icon={<NotificationsNoneIcon />}
        />
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

const Footer = () => {
  return (
    <>
      <MuiMediaQuery match="mobile">
        <Box pt="56px" />
        <CalmstringBottomNavigation />
      </MuiMediaQuery>
    </>
  );
};

export default Footer;
