function TaskCard({
  title,
  time,
  priority,
  completed = false,
}) {

  const badgeColor =
    priority === "High"
      ? "bg-red-100 text-red-600"
      : priority === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  function getRemainingTime() {
    const deadline = new Date(time);

    if (isNaN(deadline.getTime())) {
      return "No deadline";
    }

    const now = new Date();

    const diff = deadline - now;

    if (diff <= 0) return "🔴 Overdue";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    return `${days}d ${hours}h left`;
  }

  function updateTask(isCompleted) {
    const tasks =
      JSON.parse(localStorage.getItem("deadlineTasks")) || [];

    const updated = tasks.map((task) => {
      if (task.task === title && task.deadline === time) {
        return {
          ...task,
          completed: isCompleted,
        };
      }
      return task;
    });

    localStorage.setItem(
      "deadlineTasks",
      JSON.stringify(updated)
    );

    window.location.reload();
  }

  function deleteTask() {
    const tasks =
      JSON.parse(localStorage.getItem("deadlineTasks")) || [];

    const updated = tasks.filter(
      (task) =>
        !(task.task === title && task.deadline === time)
    );

    localStorage.setItem(
      "deadlineTasks",
      JSON.stringify(updated)
    );

    window.location.reload();
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-5 border hover:shadow-xl transition">

      <div className="flex justify-between">

        <div>

          <h3
            className={`text-xl font-bold ${
              completed
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {title}
          </h3>

          <p className="text-gray-500 mt-2">
            📅 {time}
          </p>

          <p className="text-blue-600 font-semibold mt-2">
            ⏳ {getRemainingTime()}
          </p>

        </div>

        <div className="flex flex-col gap-2">

          <span
            className={`${badgeColor} px-4 py-2 rounded-full font-semibold text-center`}
          >
            {priority}
          </span>

          {!completed ? (
            <button
              onClick={() => updateTask(true)}
              className="bg-green-600 text-white rounded-lg px-3 py-2"
            >
              Complete
            </button>
          ) : (
            <button
              onClick={() => updateTask(false)}
              className="bg-gray-600 text-white rounded-lg px-3 py-2"
            >
              Undo
            </button>
          )}

          <button
            onClick={deleteTask}
            className="bg-red-500 text-white rounded-lg px-3 py-2"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;