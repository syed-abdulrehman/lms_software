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
import { Typography } from "@mui/material";
import WcIcon from "@mui/icons-material/Wc";
const Syllabus = () => {
  const [subjectName, setSubjectName] = useState();
  const [className, setClassName] = useState();

  const [gender, setGender] = useState();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setGender(event.target.value);
    console.log(gender);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // add additional information to database

      await addDoc(collection(db, "syllabus"), {
        subjectName: subjectName,
        className: className,
        gender: gender,
      });
      alert("Syllabus Added Successfully");
    } catch (err) {
      alert(err);
    }

    console.log(firstName, lastName, gender, Email, className);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box sx={{ display: "flex", height: "100vh" }}>
            <Box
              sx={{
                height: "100%",
                position: "relative",
                width: { xs: "100%", sm: "100%", md: "90%", lg: "90%" },
                margin: "auto",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "60vh",

                  margin: "auto",
                  marginTop: "20px",
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
                  <Typography
                    variant="h5"
                    sx={{ marginTop: "20px", color: "#CC3433" }}
                  >
                    Add Syllabus
                  </Typography>
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
                      placeholder="Enter Subject Name"
                      style={{
                        border: "none",
                        outline: "none", // This removes the outline when the input is focused
                      }}
                      onChange={(e) => {
                        setSubjectName(e.target.value);
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
                      placeholder="Enter Class"
                      style={{
                        border: "none",
                        outline: "none", // This removes the outline when the input is focused
                      }}
                      onChange={(e) => {
                        setClassName(e.target.value);
                      }}
                    />
                  </Box>

                  {/*gender */}
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
                    <label style={{ marginRight: "4px" }}>
                      <input
                        type="radio"
                        name="gender"
                        value="general science"
                        checked={gender === "general science"}
                        onChange={handleChange}
                      />
                      <span></span> General Science
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="pre engineering"
                        checked={gender === "pre engineering"}
                        onChange={handleChange}
                      />
                      <span></span> Pre engineering
                    </label>
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
                      onClick={handleSubmit}
                    >
                      Submit
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

export default Syllabus;
