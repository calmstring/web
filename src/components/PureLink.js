import { Link } from "react-router-dom";

export default (props) => {
  return <Link {...props} style={{ textDecoration: "none", color: "unset" }} />;
};
