import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TemporaryDrawer from "./drawer";
export default function Dashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: "2" }}>
        <AppBar position="static" sx={{ backgroundColor: "#CC3448" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AutoStoriesIcon sx={{ fontSize: "55px" }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Learning Management System
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
    </>
  );
}
