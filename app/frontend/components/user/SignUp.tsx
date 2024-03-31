"use client";
import { CheckBox } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

// Skeleton for now, need to study Ethereum Account abstraction for specifics
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <Box sx={{ display: "flex" }}>
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckBox />
          <p>I have read and I accept the Terms of use</p>
        </Box>
      </Box>

      <Box>
        <h1>TEXT</h1>
      </Box>
    </Box>
  );
}
