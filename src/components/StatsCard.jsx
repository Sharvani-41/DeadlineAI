import { CheckCircle, Clock, BarChart3, ListTodo } from "lucide-react";

function StatsCard({ title, value, color }) {

  function getIcon() {
    switch (title) {
      case "Total Tasks":
      case "Tasks":
        return <ListTodo size={32} className="text-blue-600" />;

      case "Completed":
        return <CheckCircle size={32} className="text-green-600" />;

      case "Pending":
        return <Clock size={32} className="text-yellow-600" />;

      default:
        return <BarChart3 size={32} className="text-purple-600" />;
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-500 font-medium">
            {title}
          </p>

          <h2 className={`text-5xl font-extrabold mt-4 ${color}`}>
            {value}
          </h2>
        </div>

        <div className="bg-gray-100 rounded-2xl p-4">
          {getIcon()}
        </div>

      </div>

    </div>
  );
}

export default StatsCard;