import DashboardContext from "./DashboardContext";
import { Activity, Gamepad, Users } from "lucide-react";

const DashboardContextProvider = ({ children }) => {
  const pieData = [
    { name: "Chess", value: 400 },
    { name: "Minesweeper", value: 300 },
    { name: "Reversi", value: 300 },
    { name: "Ludo", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const barData = [
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
    { name: "Jun", uv: 2390, pv: 3800 },
    { name: "Jul", uv: 3490, pv: 4300 },
  ];

  const stats = [
    {
      label: "No of Games Uploaded",
      value: 38,
      icon: <Gamepad className="w-6 h-6 text-blue-400" />,
    },
    {
      label: "No of Game Views",
      value: 5000,
      icon: <Users className="w-6 h-6 text-green-400" />,
    },
    {
      label: "No of User Interactions",
      value: 1200,
      icon: <Activity className="w-6 h-6 text-violet-400" />,
    },
  ];
  return (
    <DashboardContext.Provider value={{ pieData, COLORS, barData, stats }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
