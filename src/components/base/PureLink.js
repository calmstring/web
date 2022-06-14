import { Link } from "react-router-dom";

const PureLink = (props) => {
  return <Link {...props} style={{ textDecoration: "none", color: "unset" }} />;
};

export default PureLink;
