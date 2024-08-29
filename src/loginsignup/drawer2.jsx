import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ServicesIcon from "@mui/icons-material/Build";
import ContactIcon from "@mui/icons-material/ContactMail";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: "100%", mb: 2, backgroundColor: "#CC3448" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Learning Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          zIndex: 0,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
          display: { xs: "none", md: "block" },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap component="div">
            Learning Management System
          </Typography>
          <List sx={{ marginTop: "20px" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap component="div">
            My App
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Sidebar;
