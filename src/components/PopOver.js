import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PopOverContainer from "./PopOverContainer";

export default function PopOver() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        {" "}
        <EditIcon sx={{ width: "15px", height: "15px", color: "red" }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          style: { height: "100%", width: "30%" },
        }}
      >
        <PopOverContainer handleClose={handleClose} />
      </Popover>
    </div>
  );
}
