import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const getTheme = (theme, match) => {
  switch (match) {
    case "desktop":
      return theme.breakpoints.up("md");
    case "desktop.tablet":
      return theme.breakpoints.up("sm");
    case "mobile":
      return theme.breakpoints.down("sm");
    case "mobile.tablet":
      return theme.breakpoints.down("md");
    case "tablet":
      return theme.breakpoints.between("sm", "md");
    default:
      return theme.breakpoints.up("xs");
  }
};

const MuiMediaQuery = ({ match, children }) => {
  const theme = useTheme();

  const matches = useMediaQuery(getTheme(theme, match));
  return matches ? children : null;
};

export default MuiMediaQuery;
