import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

interface Blog {
  image: string;
  title: string;
  link: string;
}

interface EditableBlogsSectionProps {
  data: Blog[];
  setData: (data: Blog[]) => void;
}

const EditableBlogsSection = ({ data, setData }: EditableBlogsSectionProps) => {
  const [newBlog, setNewBlog] = useState<Blog>({
    image: "",
    title: "",
    link: "",
  });

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedBlogs = data.map((blog, i) =>
      i === index ? { ...blog, [name]: value } : blog
    );
    setData(updatedBlogs);
  };

  const handleAddBlog = () => {
    setData([...data, newBlog]);
    setNewBlog({ image: "", title: "", link: "" });
  };

  return (
    <Box>
      {data.map((blog, index) => (
        <Box key={index} sx={{ marginBottom: "20px" }}>
          <TextField
            label="Image URL"
            name="image"
            value={blog.image}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            name="title"
            value={blog.title}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Link"
            name="link"
            value={blog.link}
            onChange={(e) => handleChange(index, e)}
            fullWidth
            margin="normal"
          />
        </Box>
      ))}
      <Box sx={{ marginTop: "20px" }}>
        <TextField
          label="New Blog Image URL"
          name="image"
          value={newBlog.image}
          onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Blog Title"
          name="title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Blog Link"
          name="link"
          value={newBlog.link}
          onChange={(e) => setNewBlog({ ...newBlog, link: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Button
          onClick={handleAddBlog}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Add Blog
        </Button>
      </Box>
    </Box>
  );
};

export default EditableBlogsSection;
