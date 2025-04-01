import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaPlusCircle,
  FaTwitter,
} from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { Link } from "react-router-dom";

function DeveloperProfile() {
  return (
    <>
      <div className="bg-[url(/images/2.png)] w-full h-screen bg-cover p-5 flex flex-col">
        <div className="flex w-full h-60 rounded-md justify-between relative p-3 bg-[#4240402d] border-4 border-gray-800 shadow-lg">
          <div className="flex items-center">
            <div className="relative">
              <img
                src="/images/profile1.jpg"
                alt="Profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-800 shadow-lg"
              />
              <Link
                to="/edit-profile"
                className="cursor-pointer absolute bottom-2 right-2 bg-[#424040bf] p-2 rounded-full shadow-md hover:bg-gray-700"
              >
                <HiPencil size={19} className="text-white" />
              </Link>
            </div>
            <div className="ml-4">
              <h1 className="text-3xl text-blue-400 font-bold">
                Dipika Mandal
              </h1>
              <span className="text-md font-semibold text-gray-400">Deepi</span>
            </div>
          </div>
          <div className="flex mt-20">
            <div className="mt-3 flex space-x-3 ">
              <a
                href="#"
                className="text-violet-700 hover:text-violet-800 transition text-4xl"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-violet-700 hover:text-violet-800 transition text-4xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-violet-700 hover:text-violet-800 transition text-4xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full h-20 rounded-md justify-between relative p-3 bg-[#424040a9]">
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-xl font-bold text-blue-300">930k</p>
              <p className="text-gray-400 text-sm">CLIP VIEWS</p>
            </div>
            <p className="text-white text-4xl">|</p>
            <div>
              <p className="text-xl font-bold text-blue-300">82</p>
              <p className="text-gray-400 text-sm">CLIPS</p>
            </div>
            <p className="text-white text-4xl">|</p>
            <div>
              <p className="text-xl font-bold text-blue-300">5.7K</p>
              <p className="text-gray-400 text-sm">FOLLOWERS</p>
            </div>
            <p className="text-white text-4xl">|</p>
            <div>
              <p className="text-xl font-bold text-blue-300">24</p>
              <p className="text-gray-400 text-sm">FOLLOWING</p>
            </div>
          </div>
          <div className="text-gray-400 flex items-center flex-col gap-1">
            <p>
              Grandmaster Zoe main and always looking for friends to play with.
            </p>
            <p className="flex">
              Valorant noobie and I like getting carried.
              <FaHeart className="text-red-500" />
            </p>
          </div>
        </div>
        <div className="flex h-96 flex-row">
          <div className="w-full p-3 bg-[#424040a9]">
            <h2 className="text-xl text-blue-300 border-b border-blue-500 pb-2 font-semibold">
              Watching Deepi’s Games
            </h2>
            <div className=" grid grid-cols-2 gap-4 mt-4">
              <div className="bg-[#2120209c] p-4 h-36 rounded-lg flex items-center gap-4">
                <img
                  src="/images/reversi.png"
                  alt="Thumbnail"
                  className="w-24 h-24 rounded cursor-pointer"
                />
                <div className="flex flex-col">
                  <p className="text-blue-300 border-b border-blue-500">
                    Reversi
                  </p>
                  <p className="text-gray-400">
                    "The classic strategy game of flipping discs and conquering
                    the board!"
                  </p>
                </div>
              </div>
              <div className="bg-[#2120209c] h-36 p-4 rounded-lg flex items-center gap-4">
                <img
                  src="/images/mines.png"
                  alt="Thumbnail"
                  className="w-24 h-24 rounded cursor-pointer"
                />
                <div className="flex flex-col">
                  <p className="text-blue-300 border-b border-blue-500">
                    Minesweeper
                  </p>
                  <p className="text-gray-400">
                    "Uncover tiles, avoid mines, and put your logic to the test
                    in the classic game of Minesweeper!"
                  </p>
                </div>
              </div>
              <div className="bg-[#2120209c] h-36 p-4 rounded-lg flex items-center gap-4">
                <img
                  src="/images/chess.png"
                  alt="Thumbnail"
                  className="w-24 h-24 rounded cursor-pointer"
                />
                <div className="flex flex-col">
                  <p className="text-blue-300 border-b border-blue-500">
                    Checkers
                  </p>
                  <p className="text-gray-400">
                    "Jump, capture, and strategize your way to victory in the
                    timeless game of Checkers!"
                  </p>
                </div>
              </div>
              <div className="bg-[#2120209c] text-8xl h-36 p-4 rounded-lg flex items-center text-violet-700 hover:text-violet-800 transition justify-center cursor-pointer gap-4">
                <FaPlusCircle />
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-md justify-between relative p-3 bg-[#4240402d] border-4 border-gray-800 shadow-lg">
            <div className="w-full p-3 bg-[#424040a9]">
              <h2 className="text-xl text-blue-300 border-b border-blue-500 pb-2 font-semibold">
                Watching Deepi’s Skills
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperProfile;
