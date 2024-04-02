"use client";
import { Box, Button, Container } from "@mui/material";
import CtaCard from "./frontend/components/home/CtaCard";
import Hero from "./frontend/components/home/Hero";
import Footer from "./frontend/components/shared/Footer";
import Navbar from "./frontend/components/shared/Navbar";

// id used to differentiate between different home pages (client/freelancer)?
// TODO: create header component (3Lance, avatar login)
export default function Home() {
  // const { user } = usePrivySmartAccount();

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

  console.log("home");
  return (
    <main>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
        <Navbar />
        <Hero />
        <Container sx={{ display: "flex", gap: "1.5rem" }}>
          <Button variant="contained">Attest reputation</Button>
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
