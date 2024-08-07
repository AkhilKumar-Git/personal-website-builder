import { Box, Typography } from "@mui/material";

// interface Props {
//   isEditing: boolean;
// }

const IntroSection = () => {
  const subIntro =
    "Ready to bring your dream product to life in the virtual world.";

  return (
    <Box
      sx={{
        paddingLeft: "8em",
      }}
    >
      <Typography
        sx={{
          fontSize: "70px",
          color: "#828282",
          lineHeight: "1.1",
          fontWeight: "500",
        }}
      >
        Hey! <br />
        I'm <span style={{ color: "black" }}>Neeraj Walia</span>, <br />a full
        stack developer.
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          color: "black",
          marginTop: "1rem",
        }}
      >
        {subIntro}
      </Typography>
    </Box>
  );
};

export default IntroSection;
