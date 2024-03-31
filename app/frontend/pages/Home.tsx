"use client";
import { Box, Container } from "@mui/material";
import CtaCard from "../components/home/CtaCard";
import Hero from "../components/home/Hero";

// id used to differentiate between different home pages (client/freelancer)?
// TODO: create header component (3Lance, avatar login)
export default function Home() {
  return (
    <main>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
        <Hero />
        <Container sx={{ display: "flex", gap: "1.5rem" }}>
          <CtaCard />
          <CtaCard />
        </Container>
      </Box>
    </main>
  );
}
