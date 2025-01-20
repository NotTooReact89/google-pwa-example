// components/Header.tsx
"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  ListItemButton,
  CssBaseline,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Home,
  Star,
  Article,
  Search,
  Public,
  LocationOn,
  Menu as MenuIcon,
  AccountCircle,
  Apps,
} from "@mui/icons-material";
import { SetStateAction, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:900px)");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { icon: <Home />, text: "Home" },
    { icon: <Star />, text: "Following" },
    { icon: <Article />, text: "News Showcase" },
    { icon: <Search />, text: "Saved Searches" },
    { icon: <Public />, text: "World" },
    { icon: <LocationOn />, text: "Your Local News" },
  ];

  const drawerContent = (
    <List>
      {menuItems.map((item, index) => (
        <ListItemButton key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" color="default" sx={{ zIndex: 1201 }}>
        <Toolbar disableGutters sx={{ paddingRight: 1.5, paddingLeft: 1.5 }}>
          {!isDesktop && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          {isDesktop ? (
            <Box
              sx={{ flexDirection: "column", width: "100%", paddingTop: "8px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Google News</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: 720,
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    overflow: "hidden",
                    backgroundColor: "#f1f3f4",
                  }}
                >
                  {/* Search Icon on the Left */}
                  <InputAdornment position="start" sx={{ padding: "0 8px" }}>
                    <SearchIcon color="action" />
                  </InputAdornment>

                  {/* Input Field */}
                  <TextField
                    variant="standard"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      flexGrow: 1,
                      "& .MuiInputBase-input": {
                        padding: "8px 0",
                      },
                    }}
                  />

                  {/* Dropdown Icon on the Right */}
                  <InputAdornment position="end" sx={{ padding: "0 8px" }}>
                    <IconButton>
                      <ArrowDropDownIcon color="action" />
                    </IconButton>
                  </InputAdornment>
                </Box>
                <Box>
                  <IconButton
                    color="inherit"
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                  >
                    <Apps sx={{ fontSize: 24, color: "#5f6368" }} />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                  >
                    <AccountCircle sx={{ fontSize: 40 }} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                {menuItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      margin: "4px 16px",
                    }}
                  >
                    {item.icon}
                    <Typography>{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Google News</Typography>
              <Box>
                <IconButton color="inherit">
                  <Search />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{
                    width: 48,
                    height: 48,
                  }}
                >
                  <Apps sx={{ fontSize: 24, color: "#5f6368" }} />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{
                    width: 48,
                    height: 48,
                  }}
                >
                  <AccountCircle sx={{ fontSize: 40 }} />
                </IconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {!isDesktop && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}></Box>
    </Box>
  );
};

export default Header;
