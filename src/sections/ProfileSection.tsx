import { Box, Avatar, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";

const ProfileSection = () => {
  const name = "Neeraj Walia";
  const image = "https://via.placeholder.com/400x400";
  const email = "neeraj2106@gmail.com";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Avatar
        alt={name}
        src={image}
        sx={{
          width: 295,
          height: 295,
          borderRadius: "25px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          marginBottom: "1em",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">{name}</Typography>
          <Typography sx={{ fontSize: "14px", color: "#666" }}>
            {email}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "#000",
              color: "#fff",
              marginRight: "0.5rem",
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "#0077b5",
              color: "#fff",
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSection;
