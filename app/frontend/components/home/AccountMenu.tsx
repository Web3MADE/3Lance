"use client";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { usePrivySmartAccount } from "@zerodev/privy";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccountMenu() {
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    zeroDevReady,
    sendTransaction,
    login,
    logout,
  } = usePrivySmartAccount();
  console.log("account menu ", user);

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/sign-in");
    }
  }, [ready, authenticated, router]);
  // const { user, authenticated, login, logout, zeroDevReady } =
  //   usePrivySmartAccount();
  // // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || authenticated || !zeroDevReady;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleLogin() {
    login();
    handleClose();
  }

  function handleLogout() {
    logout();
    handleClose();
  }

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
