"use client";
import {
  EAS_OPTIMISM_SEPOLIA_ADDRESS,
  OPTIMISM_SEPOLIA_CHAIN_ID,
} from "@/app/config/Constants";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { ContractRunner, Signature, ethers } from "ethers";
import { EAS_JSON } from "../../../config/EAS-ABI";
import { useAttestProject } from "../hooks/useAttestProject";
import { useSignature } from "../hooks/useSignature";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const APPROVE_GELATO_MESSAGE = "I approve Gelato to attest on my behalf";
export default function JobBoard() {
  // TODO: implement delegatedAttestation via Gelato for Job completion
  const { attestProject, loading, error } = useAttestProject();
  const { getSignature, isWalletReady, wallet } = useSignature();

  async function handleAttestProject() {
    if (!isWalletReady) {
      console.error("wallet not ready");
      return;
    }

    const signature = await getSignature(APPROVE_GELATO_MESSAGE);
    /** @dev split signature into v, r, s */
    const splitSignature = Signature.from(signature);

    /**@dev privy docs require switching to the current chain when using ethers directly */
    wallet.switchChain(OPTIMISM_SEPOLIA_CHAIN_ID);
    const signer = (await wallet.getEthersProvider()).getSigner();
    console.log("signer ", signer);
    const easContract = new ethers.Contract(
      EAS_OPTIMISM_SEPOLIA_ADDRESS,
      EAS_JSON.abi,
      signer as unknown as ContractRunner // This is fine, since missing methods arent required for getting populateTransaction response
    );
    /**@dev No need to abi encode, just pass callData as normal object*/
    const mockCallData = {
      schema:
        "0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc",
      data: {
        recipient: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        expirationTime: 1673891048,
        revocable: true,
        refUID:
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        data: "0x1234",
        value: 0,
      },
      signature: splitSignature,
      attester: "0xc5E8740aD971409492b1A63Db8d83025e0Fc427e",
      deadline: 1673891048,
    };

    // pass delegatedRequest argument, matching the method definition from EAS_ABI.json
    const { data: unsignedTransaction } =
      await easContract.attestByDelegation.populateTransaction({
        schema: mockCallData.schema,
        data: {
          // Ensure this matches the structure expected by the smart contract
          recipient: mockCallData.data.recipient,
          expirationTime: mockCallData.data.expirationTime,
          revocable: mockCallData.data.revocable,
          refUID: mockCallData.data.refUID,
          data: mockCallData.data.data,
          value: mockCallData.data.value,
        },
        signature: {
          v: mockCallData.signature.v,
          r: mockCallData.signature.r,
          s: mockCallData.signature.s,
        },
        attester: mockCallData.attester,
        deadline: mockCallData.deadline,
      });
    console.log("populate transaction ", unsignedTransaction);

    const attestResponse = await attestProject(
      BigInt(OPTIMISM_SEPOLIA_CHAIN_ID),
      EAS_OPTIMISM_SEPOLIA_ADDRESS,
      unsignedTransaction
    );

    console.log("attestResponse", attestResponse);
  }
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
              <Button size="small" onClick={handleAttestProject}>
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
