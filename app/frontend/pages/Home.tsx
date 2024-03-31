"use client";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

// id used to differentiate between different home pages (client/freelancer)?
// TODO: create header component (3Lance, avatar login)
export default function Home() {
  return (
    <main>
      <Box>
        <Navbar />
      </Box>
    </main>
  );
}
