import { Box, Typography } from "@mui/material";

interface BlogBoxProps {
  image: string;
  title: string;
  link: string;
}

const BlogBox = ({ image, title, link }: BlogBoxProps) => {
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
        margin: "21px 26px",
        width: "calc(50% - 52px)", // Adjust width to fit three in a row with margins
      }}
    >
      <Box
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: "16px",
          backgroundColor: "#EFEFEF",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "32px", height: "32px", borderRadius: "8px" }}
        />
      </Box>
      <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "#999999" }}>
        {link}
      </Typography>
    </Box>
  );
};

export default BlogBox;
