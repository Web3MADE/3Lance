"use client";
import { attestByDelegation, getEAS } from "@/app/config/EAS";
import { Box, Container, Typography } from "@mui/material";
import { useCallback } from "react";
import { useAttestProject } from "../hooks/useAttestProject";
import { useSignature } from "../hooks/useSignature";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import JobCard from "./JobCard";

export default function JobBoard() {
  const { attestProject, loading, error } = useAttestProject();
  const { getSignature, isWalletReady, wallet } = useSignature();

  const handleAttestByDelegation = useCallback(async () => {
    if (!isWalletReady) {
      console.error("wallet not ready");
      return;
    }

    if (!process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY) {
      console.error("No admin private key found");
      return;
    }

    const { eas } = getEAS(process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY);
    const signature = await getSignature(
      "I approve 3Lance to attest on my behalf"
    );

    if (!signature || !eas) {
      console.error("no signature or eas ", signature, eas);
      return;
    }

    await attestByDelegation(
      eas,
      signature,
      wallet.address,
      "0x6116ABf3445d8744bF78c8c7B322cD5A91613fbA",
      true
    );
  }, [getSignature, isWalletReady, wallet.address]);

  return (
    <>
      <Navbar />
      {/**@dev Container is ideal for page level container due to default padding */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography variant="h4">Job Postings</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            mt: 2,
          }}
        >
          <JobCard onClick={handleAttestByDelegation} />
          <JobCard onClick={handleAttestByDelegation} />
          <JobCard onClick={handleAttestByDelegation} />
          <JobCard onClick={handleAttestByDelegation} />
        </Box>
      </Container>

      <Box sx={{ mt: 4 }}>
        <Footer />
      </Box>
    </>
  );
}
