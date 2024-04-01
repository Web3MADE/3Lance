"use client";

import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
          width: "50%",
          alignItems: "center",
        }}
      >
        <h1>Log in</h1>
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
          <Button variant="contained">Log in</Button>
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
