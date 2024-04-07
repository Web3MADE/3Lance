"use client";
import { Box, Container } from "@mui/material";
import CtaCard from "./frontend/components/home/CtaCard";
import Hero from "./frontend/components/home/Hero";
import Footer from "./frontend/components/shared/Footer";
import Navbar from "./frontend/components/shared/Navbar";

// id used to differentiate between different home pages (client/freelancer)?
// TODO: create header component (3Lance, avatar login)
export default function Home() {
  // async function handleAttestReputation() {
  //   if (!user.wallet?.address || !user.id || !user.email) {
  //     console.error("no wallet address from user");
  //     return;
  //   }
  //   const uid = await attestNewReputation(
  //     user.wallet.address,
  //     user.id,
  //     user.email.address
  //   );
  //   console.log("uid", uid);
  // }

  return (
    <main>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
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
