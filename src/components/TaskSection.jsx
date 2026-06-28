import { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskCard from "./TaskCard";

function TaskSection() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();

    const interval = setInterval(() => {
      loadTasks();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function loadTasks() {
    const savedTasks =
      JSON.parse(localStorage.getItem("deadlineTasks")) || [];
    setTasks(savedTasks);
  }

  return (
    <div className="mt-10">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-4xl font-bold">
            📋 Today's Tasks
          </h2>

          <p className="text-gray-500 mt-2">
            Organize, prioritize and finish your work efficiently.
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-bold shadow">
          {tasks.length} Active Tasks
        </span>

      </div>

      <TaskInput />

      <div className="mt-8">

        {tasks.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center text-gray-500">
            🚀 You're all caught up!

            <p className="mt-3">
              Create your first task using the AI planner above.
            </p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.task}
              time={task.deadline}
              priority={task.priority}
              completed={task.completed}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default TaskSection;