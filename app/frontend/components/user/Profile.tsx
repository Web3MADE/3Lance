"use client";
import { Avatar, Box, Container, Paper } from "@mui/material";
import Navbar from "../shared/Navbar";
import ProfileBanner from "./ProfileBanner";

export default function Profile() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            height: "10rem",
            width: "100%",
          }}
        >
          <ProfileBanner />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Container
            sx={{
              display: "relative",
            }}
          >
            <Avatar
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                bottom: "40%",
              }}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignContent: "center",
              gap: "1rem",
            }}
          >
            <h1 style={{ alignSelf: "center" }}>Epic Smith</h1>
            <Paper>
              <h2>Freelancer</h2>
              <p>Web3 Developer</p>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
}
