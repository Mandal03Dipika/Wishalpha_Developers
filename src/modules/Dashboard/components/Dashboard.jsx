import { Link, useNavigate } from "react-router-dom";
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
import { useMutation } from "@tanstack/react-query"; 
import { createProjectService } from "@/modules/Project/services/project";
import { useState } from "react";



function Dashboard() {
  const { pieData, COLORS, barData, stats } = useDashboardContext();
  const navigate = useNavigate();
  const [projectId, setProjectId] = useState(null);

  const createProjectMutation = useMutation({
    mutationFn: createProjectService,
    onSuccess: (data) => {
      const projectId = data.data.projectId;
      console.log(`Project created successfully! Project ID: ${projectId}`);
      setProjectId(projectId);
      localStorage.setItem("projectId", projectId);
      
      navigate("/create-project");
      // navigate(`/create-project?projectId=${projectId}`); 
    },
    onError: (error) => {
      console.error("Error creating project:", error.response?.data || error.message);
    },
  });

  const handleCreateProjectClick = () => {
    console.log("Create Project button clicked");
    createProjectMutation.mutate({
    
    });
  };

  return (
    <div className="p-6 bg-[url(/images/2.png)] text-white min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-400">Dashboard</h1>
        <button
          onClick={handleCreateProjectClick}
          disabled={createProjectMutation.isLoading} 
          className={`px-4 py-2 rounded-md transition ${
            createProjectMutation.isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-violet-700 hover:bg-violet-800 text-white"
          }`}
        >
          {createProjectMutation.isLoading ? "Creating..." : "Create Project"}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 flex items-center space-x-4 bg-gray-800 rounded-md shadow-md"
          >
            {stat.icon}
            <div>
              <p className="text-md font-semibold text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-blue-300">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-blue-300">Game Distribution</h2>
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
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="p-6 bg-gray-800 rounded-md shadow-md">
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
    </div>
  );
}

export default Dashboard;