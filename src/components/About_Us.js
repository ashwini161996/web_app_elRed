import React, { useContext, useState } from "react";
import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Phone } from "@mui/icons-material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import logo from "../assets/logo.png";
import PopOver from "./PopOver";
import { Context } from "../context/Context";

export default function About_Us() {
  const [value, setValue] = useState("1");
  const { mainList } = useContext(Context);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box display="flex" flexDirection="column">
      <h2>About Us</h2>
      <Box display="flex" flexDirection="row" alignContent="flex-start">
        <img src={logo} alt="logo" width="100px" height="100px" />
        <span>
          <h3>
            <strong>
              A.T.Inks
              <br />
              <span style={{ color: "#c3c3c3" }}>Digital Inks</span>
            </strong>
          </h3>
        </span>
        <span style={{ color: "#555", fontSize: "13px", marginTop: "20px" }}>
          <VerifiedIcon
            sx={{
              height: "15px",
              width: "15px",
              marginRight: "5px",
              marginTop: "5px",
            }}
          />
          <span
            style={{
              color: "blue",
              fontSize: "11px",
              textDecoration: "underline",
            }}
          >
            {" "}
            Verify Company{" "}
          </span>
        </span>
      </Box>
      <Box sx={{ lineHeight: "15px" }}>
        <span className="info-pera">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <span style={{ color: "red", fontSize: "18px", fontWeight: "600" }}>
          <EditIcon
            sx={{ height: "15px", width: "15px", marginRight: "5px" }}
          />
        </span>
      </Box>
      <Box>
        {" "}
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Info" value="1" />
              <Tab label="FAQ" value="2" />
              <Tab label="Complaints and Feedback" value="3" />
              <Tab label="Privacy Policy" value="4" />
              <Tab label="Term & Conditions" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box display="flex" flexDirection="column">
              <Box display="flex" flexDirection="row" width="100%">
                <Box
                  sx={{
                    width: "30%",
                    padding: "10px",
                    border: 1,
                    borderColor: "#8CA2B0",
                    borderRadius: "5px",
                    marginRight: "10px",
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
                      <div>{<PopOver />}</div>
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
                            <span style={{ width: "30%" }}>
                              {mainList[0].email}
                            </span>
                          </div>
                          <span className="mr-2">
                            <div>
                              <span
                                style={{
                                  borderRadius: "50%",
                                  width: "5px",
                                  height: "5px",
                                  padding: "2px",
                                  background: "#FFEFD5",
                                  color: "#000",
                                  textAlign: "center",
                                }}
                              >
                                +{mainList.length}
                              </span>
                            </div>
                          </span>
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
                            {mainList[0].phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box
                  sx={{
                    width: "30%",
                    padding: "10px",
                    border: 1,
                    borderColor: "#8CA2B0",
                    borderRadius: "5px",
                    marginRight: "10px",
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
                          <LocationOnIcon
                            sx={{
                              width: "15px",
                              height: "15px",
                              marginRight: "10px",
                              color: "#C3CED6",
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: "600" }}>Address</span>
                      </div>
                      <div>
                        <EditIcon
                          sx={{ width: "15px", height: "15px", color: "red" }}
                        />
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
                              C-1 / 351/ 4, GIDC Makarpura,
                              <br />
                              <span style={{ marginLeft: "25px" }}>
                                Vadodara - 960010, Gujarat, India
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box
                  sx={{
                    width: "30%",
                    padding: "10px",
                    border: 1,
                    borderColor: "#8CA2B0",
                    borderRadius: "5px",
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
                          <WorkHistoryIcon
                            sx={{
                              width: "15px",
                              height: "15px",
                              marginRight: "10px",
                              color: "#C3CED6",
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: "600" }}>
                          Hours of Operation
                        </span>
                      </div>
                      <div>
                        <EditIcon
                          sx={{ width: "15px", height: "15px", color: "red" }}
                        />
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
                              Monday to Friday - 9:00 Am To 6:00 Pm
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                marginTop="20px"
                width="100%"
              >
                <Box
                  sx={{
                    width: "30%",
                    padding: "10px",
                    border: 1,
                    borderColor: "#8CA2B0",
                    borderRadius: "5px",
                    marginRight: "10px",
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
                          <LinkIcon
                            sx={{
                              width: "15px",
                              height: "15px",
                              marginRight: "10px",
                              color: "#C3CED6",
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: "600" }}>
                          Social Media & Links
                        </span>
                      </div>
                      <div>
                        <EditIcon
                          sx={{ width: "15px", height: "15px", color: "red" }}
                        />
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="mt-4">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-between",
                            fontSize: "11px",
                          }}
                        >
                          <div style={{ width: "20%" }}>
                            <span className="pr-2">
                              <LanguageIcon
                                sx={{
                                  width: "25px",
                                  height: "25px",
                                  marginRight: "10px",
                                  color: "#C3CED6",
                                }}
                              />
                            </span>
                            <span className="text-xl [font-weight:600]">
                              Website
                            </span>
                          </div>
                          <div style={{ width: "20%" }}>
                            <span className="pr-2">
                              <InstagramIcon
                                sx={{
                                  width: "25px",
                                  height: "25px",
                                  marginRight: "10px",
                                  color: "#C3CED6",
                                }}
                              />
                            </span>
                            <span className="text-xl [font-weight:600]">
                              Instagram
                            </span>
                          </div>
                          <div style={{ width: "20%" }}>
                            <span className="pr-2">
                              <FacebookIcon
                                sx={{
                                  width: "25px",
                                  height: "25px",
                                  marginRight: "10px",
                                  color: "#C3CED6",
                                }}
                              />
                            </span>
                            <span className="text-xl [font-weight:600]">
                              Facebook
                            </span>
                          </div>
                          <div style={{ width: "20%" }}>
                            <span className="pr-2">
                              <TwitterIcon
                                sx={{
                                  width: "25px",
                                  height: "25px",
                                  marginRight: "10px",
                                  color: "#C3CED6",
                                }}
                              />
                            </span>
                            <span className="text-xl [font-weight:600]">
                              Twitter
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box
                  sx={{
                    width: "30%",
                    padding: "10px",
                    border: 1,
                    borderColor: "#8CA2B0",
                    borderRadius: "5px",
                    marginRight: "10px",
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
                          <FormatQuoteIcon
                            sx={{
                              width: "15px",
                              height: "15px",
                              marginRight: "10px",
                              color: "#C3CED6",
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: "600" }}>Statement</span>
                      </div>
                      <div>
                        <EditIcon
                          sx={{ width: "15px", height: "15px", color: "red" }}
                        />
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
                            <span className="text-xl [font-weight:600]">
                              You this it we link it
                            </span>
                          </div>
                          <div>
                            <span
                              style={{
                                borderRadius: "50%",
                                width: "5px",
                                height: "5px",
                                padding: "2px",
                                background: "#FFEFD5",
                                color: "#000",
                                textAlign: "center",
                              }}
                            >
                              +1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="2">FAQ</TabPanel>
          <TabPanel value="3">Complaints and Feedback</TabPanel>
          <TabPanel value="4">Privacy Policy</TabPanel>
          <TabPanel value="5">Terms & Condition</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
