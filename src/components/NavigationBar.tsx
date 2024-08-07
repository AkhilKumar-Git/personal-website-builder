import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavigationBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        padding: "2%",
      }}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1, color: "black", paddingLeft: "5%" }}>
          Neeraj Walia
        </Typography>
        <Button sx={{ color: "black" }}>Home</Button>
        <Button sx={{ color: "black" }}>About</Button>
        <Button sx={{ color: "black" }}>Skills</Button>
        <Button sx={{ color: "black" }}>Projects</Button>
        <Button sx={{ color: "black" }}>Experience</Button>
        <Button sx={{ color: "black" }}>Connect</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
