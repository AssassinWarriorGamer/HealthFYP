import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    PointElement, // Add PointElement here
  } from "chart.js";
  import { Bar, Line, Pie } from "react-chartjs-2";
  
  // Register components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    PointElement // Ensure PointElement is registered
  );
  
  export default function ChartsSection() {
    const barData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Calories Burned",
          data: [300, 400, 500, 450, 600, 700, 650],
          backgroundColor: "#f87171",
        },
      ],
    };
  
    const lineData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Steps Over Time",
          data: [3000, 4000, 5000, 7000, 8000, 9000, 10000],
          borderColor: "#34d399",
          fill: false,
        },
      ],
    };
  
    const pieData = {
      labels: ["Walking", "Running", "Other"],
      datasets: [
        {
          data: [60, 30, 10],
          backgroundColor: ["#3b82f6", "#fbbf24", "#10b981"],
        },
      ],
    };
  
    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <Bar data={barData} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <Pie data={pieData} />
        </div>
      </div>
    );
  }
  