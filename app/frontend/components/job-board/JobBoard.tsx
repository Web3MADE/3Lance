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
import JobCard from "./JobCard";

export default function JobBoard() {
  const router = useRouter();

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
