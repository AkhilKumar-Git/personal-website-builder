import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
}

interface EditableProjectsSectionProps {
  data: Project[];
  setData: (data: Project[]) => void;
}

const EditableProjectsSection = ({
  data,
  setData,
}: EditableProjectsSectionProps) => {
  const [newProject, setNewProject] = useState<Project>({
    image: "",
    title: "",
    link: "",
    description: "",
  });

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedProjects = data.map((project, i) =>
      i === index ? { ...project, [name]: value } : project
    );
    setData(updatedProjects);
  };

  const handleAddProject = () => {
    setData([...data, newProject]);
    setNewProject({ image: "", title: "", link: "", description: "" });
  };

  return (
    <Box>
      {data.map((project, index) => (
        <Box key={index} sx={{ marginBottom: "20px" }}>
          <TextField
            label="Image URL"
            name="image"
            value={project.image}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            name="title"
            value={project.title}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Link"
            name="link"
            value={project.link}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={project.description}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
        </Box>
      ))}
      <Box sx={{ marginTop: "20px" }}>
        <TextField
          label="New Project Image URL"
          name="image"
          value={newProject.image}
          onChange={(e) =>
            setNewProject({ ...newProject, image: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Project Title"
          name="title"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Project Link"
          name="link"
          value={newProject.link}
          onChange={(e) =>
            setNewProject({ ...newProject, link: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Project Description"
          name="description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <Button
          onClick={handleAddProject}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Add Project
        </Button>
      </Box>
    </Box>
  );
};

export default EditableProjectsSection;
