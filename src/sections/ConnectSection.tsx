import { Box, Typography, Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ConnectProps {
  connect: {
    title: string;
    description: string;
    platform: {
      name: string;
      logo: string;
      link: string;
    };
  };
}

const ConnectSection = ({ connect }: ConnectProps) => {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          lineHeight: "28px",
          marginBottom: "20px",
        }}
      >
        {connect.title}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "30px",
          marginBottom: "40px",
        }}
      >
        {connect.description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "72px",
            height: "72px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginRight: "16px",
          }}
        >
          <img
            src={connect.platform.logo}
            alt={connect.platform.name}
            style={{ width: "72px", height: "72px" }}
          />
        </Box>
        <Link
          href={connect.platform.link}
          target="_blank"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "black",
              lineHeight: "30px",
              marginRight: "8px",
            }}
          >
            See you there
          </Typography>
          <OpenInNewIcon sx={{ fontSize: "18px" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default ConnectSection;
