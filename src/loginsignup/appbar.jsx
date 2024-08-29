import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TemporaryDrawer from "./drawer";

/*888888*/

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
export default function Dashboard() {
  const [val, setval] = useState("student");
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

      <Select labelId="demo-simple-select-label" id="demo-simple-select">
        {" "}
        <MenuItem>Ten</MenuItem>
        <MenuItem>Twenty</MenuItem>
        <MenuItem>Thirty</MenuItem>
      </Select>
    </>
  );
}
