import React from "react";
import Navigation from "./Navigation";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffebee',
      contrastText: 'A400'
    },
    secondary: lightGreen
  },
  typography: {
    fontFamily: 'Bungee',


    body1: {
      fontFamily: "Helvetica",
   }
  }
})

export default function About() {
  return (
    <div>
      <Navigation />
      <ThemeProvider theme={theme}>
      <Typography
      variant="h2"
      color="secondary"
      align="left"
      sx={{
        p: 2
      }}
      >
        About Invadr
      </Typography>
      <Typography
      color="primary"
      align="left"
      sx={{
        fontFamily: "Bungee",
        fontSize: 28
      }}
      >

          At INVADR we LOVE Video Games! We're here to share with you with and our community all the favorites from years past tothe present day. Pick your genre of choice and let us introduce you to new FAVS, remind you of forgotten LOVED ones and let you HEART all the intriguing games you want to play in the FUTURE.

        </Typography>
        </ThemeProvider>
    </div>
  );
}
