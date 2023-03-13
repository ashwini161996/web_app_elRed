import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import SearchBar from "./SearchBar";

const styles = (theme) => {
  return {
    outerBoxStyle: {
      background: "white",
      height: "50px",
      width: "100vw",
      margin: "0",
    },
  };
};

export default function Header() {
  const sx = styles(useTheme());
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        height="50px"
      >
        <Box
          display="flex"
          justifyContent="start"
          flexDirection="row"
          alignItems="center"
          mx={1}
          mt={4}
          sx={sx.outerBoxStyle}
        >
          <img src={logo} width="70px" height="50px" alt="logo" />
          <Box sx={{ marginLeft: "100px" }}>
            <SearchBar />
          </Box>
          <Box>
            <button
              component="a"
              style={{
                marginLeft: "500px",
                background: "black",
                color: "white",
                borderRadius: "6px",
                height: "30px",
                width: "150px",
                textAlign: "center",
              }}
            >
              <span>
                <ShoppingCartIcon
                  sx={{ width: "15px", height: "15px", marginRight: "10px" }}
                />
              </span>
              <span>checkout(200)</span>
            </button>
          </Box>
          <Box>
            <Avatar
              alt="user"
              src={user}
              sx={{
                width: "35px",
                height: "35px",
                marginLeft: "20px",
                marginRight: "5px",
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            User Admin <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
