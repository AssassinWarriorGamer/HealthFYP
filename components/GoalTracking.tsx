export default function GoalTracking() {
    const goals = [
      { label: "Steps", progress: 75, goal: "10,000 steps/day" },
      { label: "Calories", progress: 42, goal: "500 calories/day" },
      { label: "Distance", progress: 60, goal: "5 km/day" },
    ];
  
    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {goals.map((goal, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">{goal.label}</h3>
            <p className="text-sm text-gray-500">Goal: {goal.goal}</p>
            <div className="relative w-full h-4 bg-gray-300 rounded">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 rounded"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  