import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

interface Experience {
  image: string;
  company: string;
  designation: string;
  location: string;
  timeline: string;
  description: string;
}

interface EditableExperiencesSectionProps {
  data: Experience[];
  setData: (data: Experience[]) => void;
}

const EditableExperiencesSection = ({
  data,
  setData,
}: EditableExperiencesSectionProps) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    image: "",
    company: "",
    designation: "",
    location: "",
    timeline: "",
    description: "",
  });

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedExperiences = data.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );
    setData(updatedExperiences);
  };

  const handleAddExperience = () => {
    setData([...data, newExperience]);
    setNewExperience({
      image: "",
      company: "",
      designation: "",
      location: "",
      timeline: "",
      description: "",
    });
  };

  return (
    <Box>
      {data.map((experience, index) => (
        <Box key={index} sx={{ marginBottom: "20px" }}>
          <TextField
            label="Image URL"
            name="image"
            value={experience.image}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            name="company"
            value={experience.company}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Designation"
            name="designation"
            value={experience.designation}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={experience.location}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Timeline"
            name="timeline"
            value={experience.timeline}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={experience.description}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
        </Box>
      ))}
      <Box sx={{ marginTop: "20px" }}>
        <TextField
          label="New Experience Image URL"
          name="image"
          value={newExperience.image}
          onChange={(e) =>
            setNewExperience({ ...newExperience, image: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Experience Company"
          name="company"
          value={newExperience.company}
          onChange={(e) =>
            setNewExperience({ ...newExperience, company: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Experience Designation"
          name="designation"
          value={newExperience.designation}
          onChange={(e) =>
            setNewExperience({ ...newExperience, designation: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Experience Location"
          name="location"
          value={newExperience.location}
          onChange={(e) =>
            setNewExperience({ ...newExperience, location: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Experience Timeline"
          name="timeline"
          value={newExperience.timeline}
          onChange={(e) =>
            setNewExperience({ ...newExperience, timeline: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Experience Description"
          name="description"
          value={newExperience.description}
          onChange={(e) =>
            setNewExperience({ ...newExperience, description: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <Button
          onClick={handleAddExperience}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Add Experience
        </Button>
      </Box>
    </Box>
  );
};

export default EditableExperiencesSection;
