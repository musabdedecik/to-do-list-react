import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { SubRoutes, Routes } from "../../../config/routes";
import { NavLink } from "react-router-dom";
import { getToken, getUserName } from "../../../config/auth";
import Switch from '@mui/material/Switch';
import { FormControlLabel } from "@mui/material";
import { getUsers, updateUser } from "../../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { switchStatus } from "../../../redux/store/user";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const user = useSelector((state) => state.user.currentUser);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ marginBottom: 20, }}>
      <Container style={{ minWidth: "100%" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <FormControlLabel className="switchmui" control={<Switch name="status" checked={user?.status ?? false} onChange={(e) => {
                dispatch(updateUser(e.target.checked));
              }} color="warning" />} />
              {Routes.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <NavLink exact to={page.path}>
                    <Typography className="menu-item" textAlign="center">{page.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Routes.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink exact to={page.path}>
                  {page.name}
                </NavLink>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <FormControlLabel control={<Switch name="mstatus" checked={user?.status ?? false} onChange={(e) => {
             dispatch(updateUser(e.target.checked));
            }} color="warning" />}  />
            <Tooltip title="Detaylı göster">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={getUserName()} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {SubRoutes.map((subItem) => (
                <MenuItem onClick={subItem.fn} key={subItem.name}>
                  <NavLink className={"sub-items"} exact to={subItem.path}>
                    <Typography textAlign="center">{subItem.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;