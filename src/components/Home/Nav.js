import { Box } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

import PureLink from "../base/PureLink";

const StyledIcon = ({ Icon, sx = {}, to, ...props }) => (
  <Icon {...props} sx={{ fontSize: 38, ...sx }} />
);

const Nav = () => {
  return (
    <Box
      pt={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
      }}
    >
      <Box name="notifications" sx={{ flexGrow: 1 }}>
        <PureLink to="notifications">
          <StyledIcon Icon={NotificationsIcon} />
        </PureLink>
      </Box>
      {/*
      <Box name="search" mr={2}>
        <StyledIcon Icon={SearchIcon} to="search" />
      </Box>
    */}
      <Box name="profile">
        <PureLink to="profile">
          <StyledIcon Icon={SettingsIcon} to="profile" />
        </PureLink>
      </Box>
    </Box>
  );
};

export default Nav;
