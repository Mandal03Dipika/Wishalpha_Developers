import { Link } from "react-router-dom";
import { Upload, Gamepad, File, Loader2 } from "lucide-react";
import useProjectContext from "../context/features/useProjectContext";

function CreateProject() {
  const {
    gameData,
    handleSubmit,
    handleFileChange,
    handleChange,
  } = useProjectContext();

  return (
    <>
      <div className="p-6 bg-[url(/images/2.png)] text-white min-h-screen flex flex-col items-center">
        <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
          <h1 className="text-3xl font-bold text-blue-400 flex items-center gap-2">
            <Gamepad size={32} /> Create New Game Project
          </h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="gameName"
              placeholder="Game Name"
              value={gameData.file}
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
            <input
              type="url"
              name="thumbnail"
              placeholder="Thumbnail URL"
              value={gameData.thumbnail}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
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
                {gameData.projectFile
                  ? gameData.projectFile.name
                  : "No file chosen"}
              </span>
              <input
                type="file"
                name="projectFile"
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
                required
              />
              <label
                htmlFor="fileUpload"
                className="cursor-pointer bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
              >
                <Upload size={20} /> Upload File
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-violet-700 text-white rounded-md hover:bg-violet-800 transition flex items-center justify-center gap-2"
            >
              {gameData.uploading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Upload size={20} />
              )}
              {gameData.uploading ? "Uploading..." : "Submit Game"}
            </button>
            {gameData.uploadStatus && (
              <p
                className={`text-center mt-2 ${
                  gameData.uploadStatus.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
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
    </>
  );
}

export default CreateProject;