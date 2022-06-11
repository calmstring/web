import { Typography, Container } from "@mui/material";

import Nav from "./Nav";
import RoomsList from "../Rooms/RoomsList";
const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <Nav />
        <Typography variant="h4" py={1}>
          Calmstring
        </Typography>
        <RoomsList />
      </Container>
    </>
  );
};

export default Home;
