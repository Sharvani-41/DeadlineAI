import { useState } from "react";
import { generateTaskPlan } from "../services/geminiService";

function TaskInput() {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [hours, setHours] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!task || !deadline || !hours) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await generateTaskPlan(task, deadline, hours);
      setResult(response);

      const tasks =
        JSON.parse(localStorage.getItem("deadlineTasks")) || [];

      tasks.push({
        task,
        deadline,
        hours,
        priority:
          hours >= 8
            ? "High"
            : hours >= 4
            ? "Medium"
            : "Low",
      });

      localStorage.setItem(
        "deadlineTasks",
        JSON.stringify(tasks)
      );
    } catch (error) {
      console.error(error);
      setResult("Error generating plan.");
    }

    setLoading(false);
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Create New Task
      </h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      <input
        type="number"
        placeholder="Estimated Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Generating..." : "Generate AI Plan"}
      </button>

      {result && (
        <div className="mt-6 whitespace-pre-wrap bg-gray-100 p-5 rounded-xl">
          {result}
        </div>
      )}

    </div>
  );
}

export default TaskInput;