"use client";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            3Lance
          </Typography>
          <Button color="inherit">
            <Avatar />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
