import React, { useRef, useContext } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Context } from "../context/Context";

export default function AddContactDetails() {
  const { mainList, setMainList } = useContext(Context);
  const emailRef = useRef();
  const phoneRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    setMainList([
      ...mainList,
      {
        id: 7,
        dept: "Dept Name",
        email: email,
        phone: phone,
      },
    ]);
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" width="20vw">
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="e.g. salesteam@br.in"
            autoComplete="off"
            style={{ outline: "none" }}
            ref={emailRef}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="20vw">
          <label htmlFor="Phone">Phone:</label>
          <input
            type="text"
            name="phone"
            placeholder="+91 8599598547"
            autoComplete="off"
            style={{ outline: "none" }}
            ref={phoneRef}
          />
        </Box>
        <Button
          type="submit"
          style={{
            width: "20vw",
            marginTop: "10px",
            height: "30px",
            fontWeight: "700",
            background: "red",
            color: "white",
            marginBottom: "10px",
            border: "none",
            outline: "none",
            borderRadius: "5px",
          }}
        >
          Save
        </Button>
      </form>
    </Box>
  );
}
