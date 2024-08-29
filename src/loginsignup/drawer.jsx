import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Collapse,
  Menu,
  MenuItem,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ServicesIcon from "@mui/icons-material/Build";
import ContactIcon from "@mui/icons-material/ContactMail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Student from "./student";
import StudentList from "./studentList";
import Teacher from "./teacher";
import TeacherList from "./teacherlist";
import Subject from "./subject";
import SubjectList from "./subjectlist";
import Syllabus from "./syllabus";
import SyllabusList from "./syllabuslist";
import ClassForm from "./classform";
import ClassList from "./classlist";

const Sidebar = () => {
  const [showStudent, setShowStudent] = useState(false);
  const [showStudentList, setShowStudentList] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);
  const [showTeacherList, setShowTeacherList] = useState(false);
  const [showSubject, setShowSubject] = useState(false);
  const [showSubjectList, setShowSubjectList] = useState(false);
  const [showSyllabus, setShowSyllabus] = useState(false);
  const [showSyllabusList, setShowSyllabusList] = useState(false);
  const [showClassForm, setShowClassForm] = useState(false);
  const [showClassList, setShowClassList] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState({
    about: false,
    services: false,
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  const handleDropdownClick = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const menuOpenState = Boolean(menuOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: "100%", mb: 2, backgroundColor: "#CC3448" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Learning Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          zIndex: 0,
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
          display: { xs: "none", md: "block" },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap component="div">
            Learning Management System
          </Typography>
          <List sx={{ marginTop: "20px" }}>
            {/* Students Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Students")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Students" />
              {dropdownOpen.Students ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Students}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Student Registration"
                    onClick={() => {
                      setShowStudent(true);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Student List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(true);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);

                      setShowClassList(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Teachers Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Teachers")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Teachers" />
              {dropdownOpen.Teachers ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Teachers}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Teacher Registration"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(true);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Teacher List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(true);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Subjects Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Subjects")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Subjects" />
              {dropdownOpen.Subjects ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Subjects}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Add Subject"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(true);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Subjects List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(true);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Syllabus Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Syllabus")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Syllabus" />
              {dropdownOpen.Syllabus ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Syllabus}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Syllabus Form"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(true);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Syllabus List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(true);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* School Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("School")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="School" />
              {dropdownOpen.School ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.School}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Student Registration"
                    onClick={() => {
                      setShowStudent(true);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Teacher Registration"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(true);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Class Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("ClassForm")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="ClassForm" />
              {dropdownOpen.ClassForm ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.ClassForm}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Class Form"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(true);
                      setShowClassList(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Class List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                      setShowClassList(true);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap component="div">
            Learning Management System
          </Typography>
          <List sx={{ marginTop: "20px" }}>
            {/* Students Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Students")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Students" />
              {dropdownOpen.Students ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Students}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Student Registration"
                    onClick={() => {
                      setShowStudent(true);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Student List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(true);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Teachers Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Teachers")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Teachers" />
              {dropdownOpen.Teachers ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Teachers}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Teacher Registration"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(true);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Teacher List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(true);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Subjects Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Subjects")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Subjects" />
              {dropdownOpen.Subjects ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Subjects}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Add Subject"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(true);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Subjects List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(true);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Syllabus Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("Syllabus")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Syllabus" />
              {dropdownOpen.Syllabus ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.Syllabus}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Syllabus Form"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(true);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Syllabus List"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(true);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* School Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("School")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="School" />
              {dropdownOpen.School ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.School}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Student Registration"
                    onClick={() => {
                      setShowStudent(true);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Teacher Registration"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(true);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(false);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Class Dropdown */}
            <ListItem button onClick={() => handleDropdownClick("ClassForm")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="ClassForm" />
              {dropdownOpen.ClassForm ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdownOpen.ClassForm}>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="Class Form"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(true);
                    }}
                  />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText
                    primary="ClassList"
                    onClick={() => {
                      setShowStudent(false);
                      setShowStudentList(false);
                      setShowTeacher(false);
                      setShowTeacherList(false);
                      setShowSubject(false);
                      setShowSubjectList(false);
                      setShowSyllabus(false);
                      setShowSyllabusList(false);
                      setShowClassForm(true);
                    }}
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          width: "200px",

          width: "75%",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        {showStudent ? <Student /> : null}
        {showStudentList ? <StudentList /> : null}
        {showTeacher ? <Teacher /> : null}
        {showTeacherList ? <TeacherList /> : null}
        {showSubject ? <Subject /> : null}
        {showSubjectList ? <SubjectList /> : null}
        {showSyllabus ? <Syllabus /> : null}
        {showSyllabusList ? <SyllabusList /> : null}
        {showClassForm ? <ClassForm /> : null}
        {showClassList ? <ClassList /> : null}
      </Box>
    </Box>
  );
};

export default Sidebar;
