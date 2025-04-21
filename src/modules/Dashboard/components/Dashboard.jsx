import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useDashboardContext from "../context/features/useDashboardContext";

function Dashboard() {
  const { pieData, COLORS, barData, stats } = useDashboardContext();

  const handleCreateProject = async () => {
    try {
      const response = await fetch(
        "https://gameplatform-api.wishalpha.com/api/project/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            developerID: "67f7e959be24e809fa802755", 
            gameName: "New Game", 
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Project created successfully:", data); 
        alert(`Project created successfully! Project ID: ${data.data.projectId}`);
      } else {
        console.log("Failed to create project:", data); 
        alert(`Failed to create project: ${data.message}`);
      }
    } catch (error) {
      console.error("Error creating project:", error);
      alert("An error occurred while creating the project.");
    }
  };

  return (
    <>
      <div className="p-6 bg-[url(/images/2.png)] text-white min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-400">Dashboard</h1>
          <Link to="/create-project"
            onClick={handleCreateProject} 
            className="px-4 py-2 bg-violet-700 text-white rounded-md hover:bg-violet-800 transition"
          >
            Create Project
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 flex items-center space-x-4 bg-gray-800 rounded-md shadow-md"
            >
              {stat.icon}
              <div>
                <p className="text-md font-semibold text-gray-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-blue-300">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-gray-800 rounded-md shadow-md">
            <h2 className="text-lg font-bold text-blue-300">
              Game Distribution
            </h2>
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="p-6 bg-gray-800 rounded-md shadow-md ">
            <h2 className="text-lg font-bold text-blue-300">Monthly Stats</h2>
            <BarChart width={500} height={300} data={barData} className="mt-12">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-violet-400 mt-6">
          Active Games
        </h2>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {["Chess", "Mines", "Reversi", "Ludo"].map((game, i) => (
            <div
              key={i}
              className="flex items-center p-4 space-x-4 bg-gray-800 rounded-md shadow-md"
            >
              <img
                src={`./images/${game.toLowerCase()}.png`}
                alt={game}
                className="w-16 h-16 rounded-md border"
              />
              <div>
                <p className="text-lg font-semibold text-blue-300">{game}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;