"use client";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function AccountMenu() {
  const router = useRouter();
  const { login, logout } = usePrivy();
  // const { user, authenticated, login, logout, zeroDevReady } =
  //   usePrivySmartAccount();
  // // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = false;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  const handleLogin = useCallback(() => {
    // login();
    handleClose();
  }, []);

  const handleLogout = useCallback(() => {
    // logout();
    handleClose();
  }, []);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleProfile() {
    router.push("/profile");
  }

  function handleJobBoard() {
    router.push("/job-board");
  }

  console.log("Account Menu authenticated ");
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton onClick={handleClick}>
          <Avatar sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
      >
        {/* TODO: flags to show different options (logged in/out) */}
        {!disableLogin ? (
          <div key={"authenticated"}>
            <MenuItem onClick={handleLogin}>Create Account</MenuItem>
            <MenuItem onClick={handleLogin}>Login</MenuItem>
          </div>
        ) : (
          <div key={"not-authenticated"}>
            <MenuItem onClick={handleJobBoard}>Job Board</MenuItem>
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
}
