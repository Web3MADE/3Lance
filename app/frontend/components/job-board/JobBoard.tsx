"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function JobBoard() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",

          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            flex: "1",
            width: "50%",
            maxHeight: "300px",
            alignContent: "center",
          }}
        >
          <CardHeader title="Web3 Fullstack Engineer"></CardHeader>
          <CardContent>
            <Typography variant="body2" component="div">
              Job posting for Web3 fullstack Engineer. Specializing in React,
              Solidity, and Account Abstraction.
            </Typography>

            <CardActions>
              <Button size="small">Apply</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ mt: "auto" }}>
        <Footer />
      </Box>
    </>
  );
}
