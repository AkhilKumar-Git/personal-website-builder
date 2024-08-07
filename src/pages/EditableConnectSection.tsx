import { Box, TextField } from "@mui/material";

interface ConnectData {
  title: string;
  description: string;
  platform: {
    name: string;
    logo: string;
    link: string;
  };
}

interface EditableConnectSectionProps {
  data: ConnectData;
  setData: (data: ConnectData) => void;
}

const EditableConnectSection = ({
  data,
  setData,
}: EditableConnectSectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("platform.")) {
      const platformField = name.split(".")[1];
      setData({
        ...data,
        platform: { ...data.platform, [platformField]: value },
      });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  return (
    <Box>
      <TextField
        label="Title"
        name="title"
        value={data.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={data.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Platform Name"
        name="platform.name"
        value={data.platform.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Platform Logo URL"
        name="platform.logo"
        value={data.platform.logo}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Platform Link"
        name="platform.link"
        value={data.platform.link}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default EditableConnectSection;
