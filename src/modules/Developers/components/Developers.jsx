import { useEffect, useState } from "react";

function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const mockDevelopers = [
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/1?v=4",
      username: "mojombo",
      email: "tom@github.com",
    },
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/2?v=4",
      username: "defunkt",
      email: "chris@github.com",
    },
    {
      profileImageUrl: "https://avatars.githubusercontent.com/u/3?v=4",
      username: "pjhyett",
      email: "pj@github.com",
    },
  ];

  const filteredDevelopers = developers.filter(
    (dev) =>
      dev.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        setDevelopers(mockDevelopers);
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
    };
    fetchDevelopers();
  }, []);

  return (
    <>
      <div className="max-w-full h-screen mx-auto px-24 py-10 bg-[url(/images/2.png)] bg-cover bg-fixed">
        <div className="mb-8 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col sm:flex-row w-[80%] justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-white">
              Developer Community
            </h2>
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                placeholder="Search developers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="rounded-lg w-[80%] shadow-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Profile
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900/50 divide-y divide-gray-700">
                {filteredDevelopers.length > 0 ? (
                  filteredDevelopers.map((developer) => (
                    <tr
                      key={developer.email}
                      className="hover:bg-gray-800/40 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={
                            developer.profileImageUrl || "/default-avatar.png"
                          }
                          alt={developer.username}
                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                        {developer.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {developer.email}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-24 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <svg
                          className="w-16 h-16 mb-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                          />
                        </svg>
                        <h3 className="text-lg font-medium mb-1 text-white">
                          No developers found
                        </h3>
                        <p className="text-sm">
                          Try adjusting your search terms
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-center space-x-2">
            <button className="px-3 py-1 rounded-md hover:bg-gray-800 text-gray-300 transition-colors">
              «
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-900/50 text-blue-300 font-medium">
              1
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-800 text-gray-300 transition-colors">
              2
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-800 text-gray-300 transition-colors">
              3
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-800 text-gray-300 transition-colors">
              »
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developers;
