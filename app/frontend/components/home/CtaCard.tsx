import { Button, Paper } from "@mui/material";

export default function CtaCard() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <h2>Get Started</h2>
      <p>Sign up as a client or freelancer to start working on your project.</p>

      <Button sx={{ alignSelf: "start" }} variant="contained">
        Attack NOW
      </Button>
    </Paper>
  );
}
