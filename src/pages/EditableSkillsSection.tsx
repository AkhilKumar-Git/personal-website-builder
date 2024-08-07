import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

interface Skill {
  title: string;
  description: string;
  richTextInput: string;
}

interface EditableSkillsSectionProps {
  data: Skill[];
  setData: (data: Skill[]) => void;
}

const EditableSkillsSection = ({
  data,
  setData,
}: EditableSkillsSectionProps) => {
  const [newSkill, setNewSkill] = useState<Skill>({
    title: "",
    description: "",
    richTextInput: "",
  });

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedSkills = data.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    );
    setData(updatedSkills);
  };

  const handleAddSkill = () => {
    setData([...data, newSkill]);
    setNewSkill({ title: "", description: "", richTextInput: "" });
  };

  return (
    <Box>
      {data.map((skill, index) => (
        <Box key={index} sx={{ marginBottom: "20px" }}>
          <TextField
            label="Title"
            name="title"
            value={skill.title}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={skill.description}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Rich Text Input"
            name="richTextInput"
            value={skill.richTextInput}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
        </Box>
      ))}
      <Box sx={{ marginTop: "20px" }}>
        <TextField
          label="New Skill Title"
          name="title"
          value={newSkill.title}
          onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Skill Description"
          name="description"
          value={newSkill.description}
          onChange={(e) =>
            setNewSkill({ ...newSkill, description: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Skill Rich Text Input"
          name="richTextInput"
          value={newSkill.richTextInput}
          onChange={(e) =>
            setNewSkill({ ...newSkill, richTextInput: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <Button
          onClick={handleAddSkill}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Add Skill
        </Button>
      </Box>
    </Box>
  );
};

export default EditableSkillsSection;
