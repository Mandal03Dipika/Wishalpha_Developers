import { FaGithub, FaPen } from "react-icons/fa";
import defaultProfileImage from "/images/profile1.jpg";
import { Link } from "react-router-dom";
import useAuthContext from "../context/features/useAuthContext";

function EditProfile() {
  const {
    handleSubmit,
    removeSkill,
    addSkill,
    handleChange,
    profileData,
    newSkill,
    setNewSkill,
    fileInputRef,
    handleImageUpload,
  } = useAuthContext();

  return (
    <>
      <div className="bg-[url(/images/2.png)] w-full min-h-screen bg-cover flex justify-center items-center p-5">
        <div
          className="relative backdrop-blur-3xl bg-white/10 border border-white/30 max-w-3xl w-full p-8 rounded-2xl text-white 
        shadow-[inset_0_0_15px_rgba(255,255,255,0.2),_0_4px_15px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="relative w-40 h-40">
            <img
              src={profileData.profileImageUrl || defaultProfileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-lg"
            />
            <button
              className="absolute bottom-2 right-2 bg-purple-500 p-2 rounded-full shadow-md hover:bg-purple-600 transition-all"
              onClick={() => fileInputRef.current.click()}
            >
              <FaPen className="text-white text-sm" />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-bold text-purple-300 drop-shadow-lg mb-6 text-center lg:text-left">
              Update Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="contactNo"
                value={profileData.contactNo}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full p-3 bg-white/15 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <div className="space-y-2">
                <div className="flex">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add Skill"
                    className="flex-grow p-3 bg-white/15 text-white rounded-l-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 bg-purple-600 hover:bg-purple-700 rounded-r-lg text-white font-medium transition-all shadow-md active:scale-95"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-500 px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-red-500 transition-all shadow-lg flex items-center gap-1"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 text-xs font-bold"
                      >
                        ✖
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="link"
                  value={profileData.link}
                  onChange={handleChange}
                  placeholder="GitHub / Portfolio Link"
                  className="w-full p-3 bg-white/15 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <FaGithub className="absolute top-3 right-3 text-purple-300" />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white py-3 rounded-lg
              font-bold transition-all shadow-lg active:scale-95"
              >
                Update Profile
              </button>
            </form>
          </div>
          <Link
            to="/profile"
            className="block text-center text-blue-300 hover:text-blue-400 transition"
          >
            Back to Profile
          </Link>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
