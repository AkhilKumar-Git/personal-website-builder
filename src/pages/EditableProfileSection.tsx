import { Box, TextField } from "@mui/material";

interface ProfileData {
  name: string;
  email: string;
  image: string;
  linkedIn: string;
}

interface EditableProfileSectionProps {
  data: ProfileData;
  setData: (data: ProfileData) => void;
}

const EditableProfileSection = ({
  data,
  setData,
}: EditableProfileSectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Box>
      <TextField
        label="Name"
        name="name"
        value={data.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image URL"
        name="image"
        value={data.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default EditableProfileSection;
