export default function KeyMetrics() {
    const metrics = [
      { title: "Total Steps", value: "23,450 steps this week" },
      { title: "Calories Burned", value: "2,100 calories burned" },
      { title: "Total Distance", value: "12.5 km covered" },
      { title: "Active Minutes", value: "240 active minutes this week" },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md flex flex-col items-center justify-center"
          >
            <h3 className="text-xl font-semibold text-gray-700">{metric.title}</h3>
            <p className="text-lg text-gray-500">{metric.value}</p>
          </div>
        ))}
      </div>
    );
  }