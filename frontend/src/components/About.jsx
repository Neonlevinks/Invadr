import React from "react";
import Navigation from "./Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import invadr from "../files/ivadr.png";
import "../App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffebee",
      contrastText: "A400",
    },
    secondary: lightGreen,
  },
  typography: {
    fontFamily: "Bungee",

    body1: {
      fontFamily: "Helvetica",
    },
  },
});

export default function About() {
  return (
    <div className="about">
      <Navigation />
      <ThemeProvider theme={theme}>
        <Typography
          variant="h2"
          color="secondary"
          align="center"
          sx={{
            p: 2,
            marginTop: "10rem",
          }}
        >
          About Invadr
        </Typography>
        <Typography
          color="primary"
          align="center"
          sx={{
            fontFamily: "Bungee",
            fontSize: 28,
            p: 9,
            gutterBottom: "true",
            textShadow: "1px 1px 1px lime",
            paddingLeft: "10%",
            paddingRight: "12%",
          }}
        >
          At INVADR we LOVE Video Games! We're here to share with you and our
          community all the favorites from years past to the present day. Pick
          your genre of choice and let us introduce you to new FAVS, remind you
          of forgotten LOVED ones and let you HEART all the intriguing games you
          want to play in the FUTURE.
        </Typography>
      </ThemeProvider>
      <div className="logoDiv">
        <img className="aboutLogo" src={invadr} alt="logo" />
      </div>
    </div>
  );
}
