import { useState } from "react";
import ProjectContext from "./ProjectContext";

const ProjectContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    projectId: "",
    gameName: "",
    genre: "",
    thumbnail: "",
    description: "",
    projectFile: null,
    uploading: false,
    uploadStatus: "",
  });

  const handleChange = (e) => {
    setGameData({ ...gameData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setGameData({ ...gameData, projectFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGameData({ ...gameData, uploading: true, uploadStatus: "Uploading..." });

    setTimeout(() => {
      setGameData({
        ...gameData,
        uploading: false,
        uploadStatus: "Upload complete!",
      });
    }, 3000);
  };

  return (
    <ProjectContext.Provider
      value={{
        gameData,
        handleSubmit,
        handleFileChange,
        handleChange,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
