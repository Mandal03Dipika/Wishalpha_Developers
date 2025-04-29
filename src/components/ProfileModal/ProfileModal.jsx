import { IoClose } from "react-icons/io5";
import useDeveloperProfileContext from "../../pages/DeveloperProfile/context/features/useDeveloperProfileContext";

function ProfileModal() {
  const { open, setOpen } = useDeveloperProfileContext();

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#27232390] bg-opacity-50 z-50">
        <div className="bg-[#9ebff7] p-6 rounded-lg shadow-lg w-96 relative">
          <button
            className="absolute w-10 h-10 bg-white rounded-full -top-4 -right-3 flex items-center justify-center cursor-pointer p-2 text-red-600 hover:text-red-800"
            onClick={() => setOpen(false)}
          >
            <IoClose size={26} />
          </button>
          <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nickname
              </label>
              <input
                type="text"
                // value={nickname}
                // onChange={(e) => setNickname(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-2">
            <button
              className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setOpen(false)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileModal;
