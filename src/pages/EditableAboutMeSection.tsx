import { Box, TextField } from "@mui/material";

interface AboutMeData {
  content: string;
}

interface EditableAboutMeSectionProps {
  data: AboutMeData;
  setData: (data: AboutMeData) => void;
}

const EditableAboutMeSection = ({
  data,
  setData,
}: EditableAboutMeSectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ content: e.target.value });
  };

  return (
    <Box>
      <TextField
        label="About Me"
        value={data.content}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
    </Box>
  );
};

export default EditableAboutMeSection;
