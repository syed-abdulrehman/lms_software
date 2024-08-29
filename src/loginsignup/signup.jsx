import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginImg from "../assets/lms_login.jfif";
import "./loginstyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);

      // add additional information to database

      await addDoc(collection(db, "users"), {
        firstName: firstName,
        lastName: lastName,
      });
      alert("Signup successful");

      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box sx={{ display: "flex", height: "100vh" }}>
            <Box
              className="bgLeft"
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
                width: "60%",
                border: "2px solid red",
                height: "100%",
              }}
            ></Box>
            <Box
              sx={{
                height: "100%",
                position: "relative",
                width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  height: "60vh",

                  border: "1px solid gray",
                  margin: "auto",
                  marginTop: "20vh",
                  borderRadius: "25px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <AccountCircleIcon
                    sx={{
                      color: "#CC3433",
                      position: "absolute",
                      //   left: { md: "43%", sm: "90%", xs: "36%", lg: "43%" },
                      top: "-50px",
                      zIndex: "2",
                      fontSize: "100px",
                    }}
                  />
                </Box>
                <Box sx={{ marginTop: "70px" }}>
                  <Box
                    sx={{
                      marginLeft: "10px",
                      display: "flex",
                      width: "80%",
                      border: "1px solid gray",
                      borderRadius: "8px",
                      margin: "auto",
                    }}
                  >
                    <AccountCircleIcon
                      sx={{ fontSize: "34px", color: "#CC3433" }}
                    />{" "}
                    <input
                      className="inp"
                      type="text"
                      placeholder="Enter First Name"
                      style={{
                        border: "none",
                        outline: "none", // This removes the outline when the input is focused
                      }}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "10px",
                      display: "flex",
                      width: "80%",
                      border: "1px solid gray",
                      borderRadius: "8px",
                      margin: "auto",
                      marginTop: "5px",
                    }}
                  >
                    <AccountCircleIcon
                      sx={{ fontSize: "34px", color: "#CC3433" }}
                    />{" "}
                    <input
                      className="inp"
                      type="text"
                      placeholder="Enter Last Name"
                      style={{
                        border: "none",
                        outline: "none", // This removes the outline when the input is focused
                      }}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "10px",
                      display: "flex",
                      width: "80%",
                      border: "1px solid gray",
                      borderRadius: "8px",
                      margin: "auto",
                      marginTop: "5px",
                    }}
                  >
                    <EmailIcon sx={{ fontSize: "34px", color: "#CC3433" }} />{" "}
                    <input
                      className="inp"
                      type="text"
                      placeholder="Enter Email"
                      style={{
                        border: "none",
                        outline: "none", // This removes the outline when the input is focused
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "10px",
                      display: "flex",
                      width: "80%",
                      border: "1px solid gray",
                      borderRadius: "8px",
                      margin: "auto",
                      marginTop: "5px",
                    }}
                  >
                    <LockIcon sx={{ fontSize: "34px", color: "#CC3433" }} />{" "}
                    <input
                      className="inp"
                      type="password"
                      placeholder="Enter Password"
                      style={{
                        border: "none",
                        outline: "none", // This removes the outline when the input is focused
                      }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Box>
                  {/* button box */}
                  <Box
                    sx={{
                      marginLeft: "10px",
                      display: "flex",
                      width: "80%",

                      borderRadius: "8px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#CC3433",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#CC3448",
                        },
                        width: "100%",
                      }}
                      onClick={handleSignup}
                    >
                      Signup
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
