"use client";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

// id used to differentiate between different home pages (client/freelancer)?
// TODO: create header component (3Lance, avatar login)
export default function Home() {
  return (
    <main>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
        <Navbar />
        <Hero />
      </Box>
    </main>
  );
}
