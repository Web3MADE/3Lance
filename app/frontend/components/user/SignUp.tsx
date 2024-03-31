"use client";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

// Skeleton for now, need to study Ethereum Account abstraction for specifics
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);

  function handleChecked(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
          width: "50%",
          alignItems: "center", // Center the content horizontally
        }}
      >
        <h1>Sign Up</h1>
        <TextField
          variant="outlined"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Checkbox
              checked={checked}
              onChange={handleChecked}
              inputProps={{ "aria-label": "controlled" }}
            />
            <p>I have read and I accept the Terms of use.</p>
          </Box>

          <Button variant="contained">Confirm</Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/happyfreelancer.jpeg"
            alt="Happy Freelancer"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Box>
    </Box>
  );
}
