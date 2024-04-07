"use client";
import { attestByDelegation, getEAS } from "@/app/config/EAS";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import { useAttestProject } from "../hooks/useAttestProject";
import { useSignature } from "../hooks/useSignature";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const APPROVE_GELATO_MESSAGE = "I approve Gelato to attest on my behalf";
export default function JobBoard() {
  // TODO: implement delegatedAttestation via Gelato for Job completion
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
              <Button size="small" onClick={handleAttestByDelegation}>
                Attest Project
              </Button>
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
