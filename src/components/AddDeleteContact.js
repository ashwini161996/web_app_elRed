import React from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Phone } from "@mui/icons-material";

export default function AddDeleteContact({
  list,
  setList,
  setEditCheck,
  handleSave,
}) {
  function handleDelete(id) {
    const newList = list.filter((li) => li.id !== id);
    setList(newList);
  }
  return (
    <Box>
      {list.map((contactData, i) => {
        return (
          <Box
            key={i}
            sx={{
              width: "20vw",
              padding: "10px",
              border: 1,
              borderColor: "#8CA2B0",
              borderRadius: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-between",
                }}
              >
                <div style={{ width: "90%" }}>
                  <span className="pr-2">
                    <PersonIcon
                      sx={{
                        width: "15px",
                        height: "15px",
                        marginRight: "10px",
                        color: "#C3CED6",
                      }}
                    />
                  </span>
                  <span style={{ fontWeight: "600" }}>Contact</span>
                </div>
                <div>
                  <Box display="flex" flexDirection="row">
                    <IconButton
                      variant="contained"
                      onClick={() => setEditCheck(true)}
                    >
                      {" "}
                      <EditIcon
                        sx={{ width: "15px", height: "15px", color: "red" }}
                      />
                    </IconButton>
                    <IconButton
                      variant="contained"
                      onClick={() => {
                        handleDelete(contactData.id);
                      }}
                    >
                      {" "}
                      <DeleteIcon
                        sx={{ width: "15px", height: "15px", color: "red" }}
                      />
                    </IconButton>
                  </Box>
                </div>
              </div>
              <div className="mt-8">
                <div className="mt-4">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-between",
                      fontSize: "14px",
                    }}
                  >
                    <div style={{ width: "90%" }}>
                      <span className="pr-2">
                        <EmailIcon
                          sx={{
                            width: "15px",
                            height: "15px",
                            marginRight: "10px",
                            color: "#C3CED6",
                          }}
                        />
                      </span>
                      <span className="text-xl [font-weight:600]">
                        {contactData.email}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="mr-2">
                      <Phone
                        sx={{
                          width: "15px",
                          height: "15px",
                          marginRight: "10px",
                          color: "#C3CED6",
                        }}
                      />
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {contactData.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        );
      })}
      <Button
        variant="contained"
        sx={{
          width: "22vw",
          height: "30px",
          fontWeight: "700",
          background: "red",
          color: "white",
          marginTop: "10px",
          marginBottom: "10px",
          border: "none",
          outline: "none",
          borderRadius: "5px",
        }}
        onClick={handleSave}
      >
        Save
      </Button>
    </Box>
  );
}
