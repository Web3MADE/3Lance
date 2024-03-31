"use client";
import { CheckBox } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

// Skeleton for now, need to study Ethereum Account abstraction for specifics
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
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
