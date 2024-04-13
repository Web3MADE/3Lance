"use client";

import { Box, Button } from "@mui/material";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const { ready, authenticated, login, user } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/");
    }
  }, [authenticated, ready, router]);

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={login}>
            Log in
          </Button>
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
