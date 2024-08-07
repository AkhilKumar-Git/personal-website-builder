import { useEffect, useState } from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";

interface Profile {
  name: string;
  image: string;
  email: string;
  linkedIn: string;
}

interface ProfileProps {
  profileObject: Profile;
}

const ProfileSection = ({ profileObject }: ProfileProps) => {
  const [profile, setProfile] = useState<Profile>(profileObject);

  useEffect(() => {
    fetch("/")
      .then((response) => response.json())
      .then((data: Profile) => {
        setProfile(data);
      })
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

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
        alt={profile.name}
        src={profile.image}
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
          <Typography variant="h6">{profile.name}</Typography>
          <Typography sx={{ fontSize: "14px", color: "#666" }}>
            {profile.email}
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
            onClick={() => window.open(profile.linkedIn, "_blank")}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSection;
