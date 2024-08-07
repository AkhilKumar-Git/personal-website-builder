import { Box, Typography } from "@mui/material";

interface SkillBoxProps {
  title: string;
  description: string;
  richTextInput: string;
}

const SkillBox = ({ title, description, richTextInput }: SkillBoxProps) => {
  return (
    <Box
      sx={{
        width: "calc(50% - 10px)",
        padding: "5%",
        borderRadius: "25px",
        border: "1px solid #dadada",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        marginTop: "5%",
        marginBottom: "20px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "20px" }}>
        {title}
      </Typography>
      <Typography sx={{ marginBottom: "30px" }}>{description}</Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "20px" }}
        dangerouslySetInnerHTML={{ __html: richTextInput }}
      />
    </Box>
  );
};

export default SkillBox;
