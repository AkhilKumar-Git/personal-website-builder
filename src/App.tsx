import { Route, Routes } from "react-router-dom";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/edit" element={<EditPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
