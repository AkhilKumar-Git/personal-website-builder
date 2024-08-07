import { Box, Typography } from "@mui/material";

interface ExperienceBoxProps {
  image: string;
  company: string;
  designation: string;
  location: string;
  timeline: string;
  description: string;
}

const ExperienceBox = ({
  image,
  company,
  designation,
  location,
  timeline,
  description,
}: ExperienceBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        padding: "5%",
        borderRadius: "25px",
        border: "1px solid #dadada",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        margin: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginRight: "8px",
          }}
        >
          <img
            src={image}
            alt={company}
            style={{ width: "24px", height: "24px" }}
          />
        </Box>
        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 600 }}>
          {company}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: "28px",
          letterSpacing: "-2%",
        }}
      >
        {designation}
      </Typography>
      <Typography sx={{ fontSize: "12px", fontWeight: 500, color: "#858585" }}>
        {location} • {timeline}
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: 500, marginTop: "16px" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default ExperienceBox;
