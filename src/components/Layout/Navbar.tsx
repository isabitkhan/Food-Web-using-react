import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/5526265.jpg";
import "../../styles/NavbarStyle.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handle Menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        marginLeft={1}
        component={"div"}
        variant="h6"
        sx={{ flexGrow: 1 }}
        color={"goldenrod"}
      >
        {/* <FastfoodRounded /> Best selling Food */}
        <img
          src={Logo}
          alt=""
          height={"50px"}
          width={"50px"}
          style={{ borderRadius: "30px" }}
        />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            {/* <FastfoodRounded /> */}
            <img
              src={Logo}
              alt=""
              height={"50px"}
              width={"50px"}
              style={{ borderRadius: "30px" }}
            />
            <Typography
              marginLeft={1}
              component={"div"}
              variant="h6"
              sx={{ flexGrow: 1 }}
              color={"goldenrod"}
            >
              {" "}
              Best selling Food
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { sx: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Box>
            <Toolbar />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
