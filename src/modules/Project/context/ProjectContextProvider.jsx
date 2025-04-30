import { useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";
// import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createProjectService, uploadProjectService } from "../services/project";


const ProjectContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    projectID: "",
    projectName: "",
    genre: "",
    description: "",
    file: null,
    uploading: false,
    uploadStatus: "",
  });

//   const location = useLocation();
// const queryParams = new URLSearchParams(location.search);
// const projectID = queryParams.get("projectID");

const projectID = localStorage.getItem("projectID");




  useEffect(() => {
    if (projectID) {
      setGameData((prev) => ({ ...prev, projectID }));
    }
  }, [projectID]);

  const handleChange = (e) => {
    setGameData({ ...gameData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file); 
    setGameData({ ...gameData, file: file });
  };
  
  const mutationCreateProject = useMutation({
    mutationFn: createProjectService,
    onSuccess: (res) => {
      console.log("Project created successfully:", res);
      setGameData((prev) => ({ ...prev, projectID: res.data.projectID }));
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
  

    const { projectID, projectName, genre, description, file } = gameData;

    if (!projectID) return alert("Project ID missing!")
    if (!projectName || !genre || !description || !file) {
      return alert("Fill all fields and upload a file.");
    }
  console.log(gameData.file);
  
  const payload={
    projectID,
    projectName,
    genre,
    description,
    file,
  }
  console.log(payload)

   const formData = new FormData();
    
  formData.append("projectID", String(projectID));
  formData.append("projectName", String(projectName));
  formData.append("genre", String(genre));
  formData.append("description", String(description));
  formData.append("file", file);

// formData.append("data", JSON.stringify({ projectID, projectName, genre, description }));
// formData.append("file", file);
    console.log(projectID);
    
    console.log(formData);
    
    formData.forEach((e)=>{
      console.log(e);
      
    })
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    
    // formData.append("projectID", projectID); 
// console.log(formData);
    // console.log(formData.values()); 

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