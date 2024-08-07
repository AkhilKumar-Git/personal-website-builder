import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

interface SiteBuilderNavbarProps {
  onSave: () => void;
  onPublish: () => void;
}

const SiteBuilderNavbar = ({ onSave, onPublish }: SiteBuilderNavbarProps) => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#333", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
          Site Builder
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button sx={{ color: "#fff" }} onClick={onSave}>
            Save
          </Button>
          <Button sx={{ color: "#fff" }} onClick={onPublish}>
            Publish
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SiteBuilderNavbar;
