import { Box, TextField } from "@mui/material";

interface IntroData {
  title: string;
  subIntro: string;
}

interface EditableIntroSectionProps {
  data: IntroData;
  setData: (data: IntroData) => void;
}

const EditableIntroSection = ({ data, setData }: EditableIntroSectionProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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
        label="Subtitle"
        name="subtitle"
        value={data.subIntro}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default EditableIntroSection;
