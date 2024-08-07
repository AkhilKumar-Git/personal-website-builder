import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface IntroData {
  title: string;
  subIntro: string;
}

interface IntroObjectProps {
  intro: IntroData;
}

const IntroSection = ({ intro }: IntroObjectProps) => {
  const [introData, setIntroData] = useState(intro);

  useEffect(() => {
    fetch("/")
      .then((response) => response.json())
      .then((data: IntroData) => {
        setIntroData(data);
      })
      .catch((error) => console.error("Error fetching intro data:", error));
  }, []);

  if (!introData) {
    return <div>Loading...</div>;
  }

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
        {intro.title}.
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          color: "black",
          marginTop: "1rem",
        }}
      >
        {intro.subIntro}
      </Typography>
    </Box>
  );
};

export default IntroSection;
