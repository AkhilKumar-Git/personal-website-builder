import { Box, Typography } from "@mui/material";

interface Props {
  content: string;
}

const AboutMeSection = ({ content }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        About Me
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "1.5",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default AboutMeSection;
