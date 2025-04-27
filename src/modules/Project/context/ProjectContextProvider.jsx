import { useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";
// import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createProjectService, uploadProjectService } from "../services/project";


const ProjectContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    projectId: "",
    gameName: "",
    genre: "",
    description: "",
    projectFile: null,
    uploading: false,
    uploadStatus: "",
  });

//   const location = useLocation();
// const queryParams = new URLSearchParams(location.search);
// const projectId = queryParams.get("projectId");

const projectId = localStorage.getItem("projectId");




  useEffect(() => {
    if (projectId) {
      setGameData((prev) => ({ ...prev, projectId }));
    }
  }, [projectId]);

  const handleChange = (e) => {
    setGameData({ ...gameData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file); 
    setGameData({ ...gameData, projectFile: file });
  };
  
  const mutationCreateProject = useMutation({
    mutationFn: createProjectService,
    onSuccess: (res) => {
      console.log("Project created successfully:", res);
      setGameData((prev) => ({ ...prev, projectId: res.data.projectId }));
    },
    onError: (error) => {
      console.error("Error creating project:", error.response?.data || error.message);
    },
  });

  const handleCreateProject = (payload) => {
    mutationCreateProject.mutate(payload);
  };

  
  const mutationUploadProject = useMutation({
    mutationFn: uploadProjectService,
    onSuccess: (res) => {
      console.log("Project uploaded successfully:", res);
      // console.log("Response Data:", res.data);
      setGameData((prev) => ({
        ...prev,
        uploading: false,
        uploadStatus: "Project Uploaded successfully!",
      }));
   
    },
    onError: (error) => {
      console.error("Error uploading project:", error.response?.data || error.message);
      setGameData((prev) => ({
        ...prev,
        uploading: false,
        uploadStatus: "An error occurred during upload.",
      }));
    },
  });



  const handleSubmit = (e) => {
    e.preventDefault();
  

    const { projectId, gameName, genre, description, projectFile } = gameData;

    if (!projectId) return alert("Project ID missing!")
    if (!gameName || !genre || !description || !projectFile) {
      return alert("Fill all fields and upload a file.");
    }
  
    const formData = new FormData();
    formData.append("file", gameData.projectFile);
    formData.append("projectName", gameData.gameName);
    formData.append("genre", gameData.genre);
    formData.append("description", gameData.description);
    formData.append("projectID", gameData.projectId);
    // formData.append("projectId", projectId); 

    console.log([...formData.entries()]);

    mutationUploadProject.mutate(formData);
  };
  
  
  return (
    <ProjectContext.Provider
      value={{
        gameData,
        handleSubmit,
        handleFileChange,
        handleChange,
        handleCreateProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;