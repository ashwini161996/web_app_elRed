import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddContactDetails from "./AddContactDetails";
import AddDeleteContact from "./AddDeleteContact";
import { Context } from "../context/Context";
import { contactList } from "../data/ContactData";

export default function PopOverContainer({ handleClose }) {
  const { mainList, setMainList } = useContext(Context);
  const [list, setList] = useState(mainList);
  const [editCheck, setEditCheck] = useState(false);
  function handleSave() {
    setMainList(list);
    console.log("save clicked");
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Box display="flex" flexDirection="row" justifyContent="flex-between">
          <IconButton
            onClick={handleClose}
            sx={{ height: "20px", marginTop: "15%" }}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "30px",
              marginTop: "30px",
              fontWeight: "700",
            }}
          >
            Contacts
          </Typography>
        </Box>

        <p style={{ textAlign: "center" }}>
          Please provide company's email and contact
        </p>
      </Box>
      {editCheck ? (
        <AddContactDetails setList={setList} list={list} />
      ) : (
        <AddDeleteContact
          list={list}
          setList={setList}
          setEditCheck={setEditCheck}
          handleSave={handleSave}
        />
      )}
    </Box>
  );
}
