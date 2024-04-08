"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useAttestProject } from "../hooks/useAttestProject";
import JobCard from "./JobCard";

export default function JobBoard() {
  const router = useRouter();
  const { attestProject, loading, error } = useAttestProject();
  // const { getSignature, isWalletReady, wallet } = useSignature();

  // const () => {} = useCallback(async () => {
  //   if (!isWalletReady) {
  //     console.error("wallet not ready");
  //     return;
  //   }

  //   if (!process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY) {
  //     console.error("No admin private key found");
  //     return;
  //   }

  //   const { eas } = getEAS(process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY);
  //   const signature = await getSignature(
  //     "I approve 3Lance to attest on my behalf"
  //   );

  //   if (!signature || !eas) {
  //     console.error("no signature or eas ", signature, eas);
  //     return;
  //   }

  //   await attestByDelegation(
  //     eas,
  //     signature,
  //     wallet.address,
  //     "0x6116ABf3445d8744bF78c8c7B322cD5A91613fbA",
  //     true
  //   );
  // }, [getSignature, isWalletReady, wallet.address]);

  function handleJobPosting() {
    router.push("/job-board/post-job");
  }

  {
    /**@dev Container is ideal for page level container due to default padding */
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Card>
          <CardHeader title="Need a Freelancer?" />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardActions
              sx={{ display: "flex", justifyContent: "flex-start", pl: 0 }}
            >
              <Button sx={{ padding: 0 }} onClick={handleJobPosting}>
                Post a Job
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>

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
        <JobCard onClick={() => {}} />
        <JobCard onClick={() => {}} />
        <JobCard onClick={() => {}} />
        <JobCard onClick={() => {}} />
      </Box>
    </Container>
  );
}
