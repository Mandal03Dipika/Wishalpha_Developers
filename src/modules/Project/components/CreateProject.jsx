import { Link } from "react-router-dom";
import { Upload, Gamepad, File, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import useProjectContext from "../context/features/useProjectContext";

function CreateProject() {
  const {
    gameData,
    handleSubmit,
    handleFileChange,
    handleChange,
  } = useProjectContext();

  
  const validateForm = () => {
    if (!gameData.projectName || !gameData.genre || !gameData.description || !gameData.file) {
      alert("Please fill in all required fields and upload a file.");
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const projectID = localStorage.getItem("projectID");  
      if (!projectID) {
        alert("Project ID not found. Please create a new project.");
        return;
      }
      handleSubmit(e, projectID);
    }
  };

  const isSuccess = gameData.uploadStatus.includes("successfully");

  return (
    <div className="p-6 bg-[url(/images/2.png)] text-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-blue-400 flex items-center gap-2">
          <Gamepad size={32} /> Create New Game Project
        </h1>
        <form onSubmit={handleFormSubmit} className="mt-6 space-y-4" encType="multipart/form-data">
          <input
            type="text"
            name="projectName"
            placeholder="Game Name"
            value={gameData.projectName} 
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre (e.g. Action, Adventure)"
            value={gameData.genre}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {/* <input
            type="url"
            name="thumbnail"
            placeholder="Thumbnail URL"
            value={gameData.thumbnail}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          /> */}
          <textarea
            name="description"
            placeholder="Game Description"
            value={gameData.description}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <div className="flex items-center justify-between p-4 bg-gray-800 rounded-md border border-gray-700">
            <span className="text-gray-400 flex items-center gap-2">
              <File size={20} />{" "}
              {gameData.file
                ? gameData.file.name
                : "No file chosen"}
            </span>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
              required
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
              aria-label="Upload File"
              title="Upload File"
            >
              <Upload size={20} /> Upload File
            </label>
          </div>
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full flex items-center justify-center gap-2"
          >
            {gameData.uploading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Upload size={20} />
            )}
            {gameData.uploading ? "Uploading..." : "Submit Game"}
          </Button>
          {gameData.uploadStatus && (
            <p
              className={`text-center mt-2 ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {gameData.uploadStatus}
            </p>
          )}
        </form>
        <Link
          to="/"
          className="block text-center mt-4 text-blue-300 hover:text-blue-400 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default CreateProject;