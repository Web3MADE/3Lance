"use client";
import { Box, Container } from "@mui/material";
import CtaCard from "./frontend/components/home/CtaCard";
import Hero from "./frontend/components/home/Hero";
import Footer from "./frontend/components/shared/Footer";
import Navbar from "./frontend/components/shared/Navbar";

// id used to differentiate between different home pages (client/freelancer)?
// TODO: create header component (3Lance, avatar login)
export default function Home() {
  return (
    <main>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
        <Navbar />
        <Hero />
        <Container sx={{ display: "flex", gap: "1.5rem" }}>
          <CtaCard />
          <CtaCard />
        </Container>
      </Box>

      <Box sx={{ marginTop: "8rem" }}>
        <Footer />
      </Box>
    </main>
  );
}
