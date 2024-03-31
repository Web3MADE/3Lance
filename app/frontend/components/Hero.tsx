"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Container sx={{ display: "flex" }}>
      <Box>
        <h1>3Lance</h1>
        <p>Find the perfect freelancer for your project.</p>
      </Box>
      <Image
        src="/web3freelancechillin.jpeg"
        alt="freelancer chillin"
        width={500}
        height={300}
      />
    </Container>
  );
}
