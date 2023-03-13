import * as React from "react";
import Box from "@mui/material/Box";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../assets/logo.png";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Team_Members from "./Team_Members";
import Partners from "./Partners";
import Product_Listing from "./Product_Listing";
import Awards_And_Honours from "./Awards_And_Honours";
import About_Us from "./About_Us";
import Payment_Info from "./Payment_Info";

export default function NavBar(props) {
  const [component, setComponent] = React.useState(<Dashboard />);

  const componentList = [
    { name: "Dashboard", value: <Dashboard />, icon: <InboxIcon /> },
    { name: "Orders", value: <Orders />, icon: <InboxIcon /> },
    { name: "Team Members", value: <Team_Members />, icon: <InboxIcon /> },
    { name: "Partners", value: <Partners />, icon: <InboxIcon /> },
    {
      name: "Product Listing",
      value: <Product_Listing />,
      icon: <InboxIcon />,
    },
    {
      name: "Awards and Honours",
      value: <Awards_And_Honours />,
      icon: <InboxIcon />,
    },
    { name: "About Us", value: <About_Us />, icon: <InboxIcon /> },
    { name: "Payment info", value: <Payment_Info />, icon: <InboxIcon /> },
  ];

  const drawer = (
    <div>
      <Box display="flex" justifyContent="center" margin="10px">
        <img src={logo} width="70px" height="50px" alt="logo" />
      </Box>
      <List>
        {componentList.map((component, index) => (
          <ListItem
            key={index}
            style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}
            onClick={() => setComponent(component.value)}
          >
            <ListItemButton>
              <ListItemIcon>{component.icon}</ListItemIcon>
              <ListItemText
                secondary={component.name}
                style={{ lineHeight: 1, margin: 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="20px"
        sx={{
          width: "150px",
          height: "80px",
          color: "#8CA2B0",
          border: 1,
          borderRadius: "5px",
          lineHeight: "8px",
          fontSize: "10px",
        }}
      >
        <ContactSupportOutlinedIcon sx={{ height: "15px", width: "15px" }} />
        <span sx={{ color: "#171717" }}>Need Help?</span>
        <br />
        <span>Our support team is</span>
        <br />
        <span>at your disposal</span>
        <button
          style={{
            height: "15px",
            width: "60px",
            marginTop: "5px",
            fontSize: "11px",
            background: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Get help
        </button>
      </Box>
    </div>
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: "100%", marginTop: "10px" }}
    >
      <Box
        max
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          flexDirection: "row",
          justifyContent: "flex-between",
          marginTop: "50px",
        }}
      >
        <Box
          style={{ width: "250px", background: "white", borderRadius: "5px" }}
        >
          {drawer}
        </Box>
        <Box sx={{ width: "10px" }}></Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "74vw",
            background: "white",
            borderRadius: "5px",
          }}
        >
          {component}
        </Box>
      </Box>
    </Box>
  );
}
