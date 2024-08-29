import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function SubjectList() {
  useEffect(() => {
    getData();
  }, []);

  const [dataArray, setDataArray] = useState([]);
  let dataArray2 = [];
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "subject"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   dataArray.push({ data: doc.data(), id: doc.id });
      dataArray2.push({ data: doc.data(), id: doc.id });
      setDataArray(dataArray2);
    });

    console.log(dataArray2);
    console.log("--------------");
    console.log(dataArray);
    dataArray.map((e) => {
      //   console.log(e.data.firstName);
      console.log(e.id);
    });
  };

  return (
    <>
      <Box
        sx={{
          width: { sm: "100%", xs: "100%", md: "100%", lg: "100%" },
          backgroundColor: "#CC3448",
          height: "100px",
          marginTop: "20px",
        }}
      >
        {" "}
        <Box sx={{ textAlign: "center", margin: "auto" }}>
          <Typography sx={{ color: "white", fontSize: "28px" }}>
            Subject List
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              marginRight: "15px",
            }}
          ></Box>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                Id
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Subject Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Class
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Group
              </TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>{dataArray.map((e) => console.log("1)" + e))}</TableBody> */}
          {dataArray.map((e) => {
            console.log(e);
          })}
          <TableBody>
            {dataArray.map((e) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell align="right">{e.data.subjectName}</TableCell>
                <TableCell align="right">{e.data.className}</TableCell>
                <TableCell align="right">{e.data.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
