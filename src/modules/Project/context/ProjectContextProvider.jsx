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
    const accessToken=localStorage.getItem("accessToken")
    if (!accessToken) {
      setGameData({
        ...gameData,
        uploading: false,
        uploadStatus: "access token is missing,.",
      });
      console.error("Access token is missing.");
    
      return;
    }

    if (!gameData.projectFile) {
      setGameData({ ...gameData, uploadStatus: " select a file to upload." });
      return;
    }

    setGameData({ ...gameData, uploading: true, uploadStatus: "Uploading..." });

    try {
      const formData = new FormData();
      formData.append("gameName", gameData.gameName);
      formData.append("genre", gameData.genre);
      formData.append("thumbnail", gameData.thumbnail);
      formData.append("description", gameData.description);
      formData.append("projectFile", gameData.projectFile);

      const response = await fetch("https://gameplatform-api.wishalpha.com/api/project/upload", {
        method: "POST",
        headers:{
          "Authorization":`Bearer ${accessToken}`
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setGameData({
          ...gameData,
          projectId: data.data.projectId,
          uploading: false,
          uploadStatus: "Project Uploaded successfully!",
        });
        console.log("Upload successful:", data);
      } else {
        setGameData({
          ...gameData,
          uploading: false,
          uploadStatus: `Upload failed: ${data.message}`,
        });
        console.error("Upload failed:", data);
      }
    } catch (error) {
      setGameData({
        ...gameData,
        uploading: false,
        uploadStatus: " error occurred during upload.",
      });
      console.error("Error uploading project:", error);
    }
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