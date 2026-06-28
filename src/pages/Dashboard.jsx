import { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";
import TaskSection from "../components/TaskSection";
import AIInsights from "../components/AIInsights";

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    progress: 0,
  });

  useEffect(() => {
    loadStats();

    const interval = setInterval(loadStats, 1000);

    return () => clearInterval(interval);
  }, []);

  function loadStats() {
    const tasks =
      JSON.parse(localStorage.getItem("deadlineTasks")) || [];

    const completed = tasks.filter(
      (task) => task.completed
    ).length;

    const pending = tasks.length - completed;

    const progress =
      tasks.length === 0
        ? 0
        : Math.round((completed / tasks.length) * 100);

    setStats({
      total: tasks.length,
      completed,
      pending,
      progress,
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      <div className="max-w-7xl mx-auto p-8">

        {/* HERO */}

        <div className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-2xl">

          <p className="uppercase tracking-[4px] text-sm opacity-80">
            Smart Productivity Platform
          </p>

          <h1 className="text-6xl font-extrabold mt-3">
            🚀 DeadlineAI
          </h1>

          <p className="mt-4 text-xl max-w-3xl leading-8 text-blue-100">
            Plan smarter, organize deadlines, monitor progress,
            and stay productive with an AI-inspired task
            management dashboard.
          </p>

          <div className="flex gap-8 mt-8">

            <div>
              <h2 className="text-3xl font-bold">
                {stats.total}
              </h2>

              <p className="text-blue-100">
                Total Tasks
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {stats.progress}%
              </h2>

              <p className="text-blue-100">
                Productivity
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {stats.completed}
              </h2>

              <p className="text-blue-100">
                Completed
              </p>
            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <StatsCard
            title="Total Tasks"
            value={stats.total}
            color="text-blue-600"
          />

          <StatsCard
            title="Completed"
            value={stats.completed}
            color="text-green-600"
          />

          <StatsCard
            title="Pending"
            value={stats.pending}
            color="text-yellow-600"
          />

          <StatsCard
            title="Progress"
            value={`${stats.progress}%`}
            color="text-purple-600"
          />

        </div>

        {/* PROGRESS */}

        <div className="bg-white rounded-3xl shadow-xl p-7 mt-8">

          <div className="flex justify-between">

            <h2 className="text-xl font-bold">
              📈 Productivity Score
            </h2>

            <span className="font-bold text-blue-600">
              {stats.progress}%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-5 mt-5">

            <div
              className="h-5 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600 transition-all duration-700"
              style={{
                width: `${stats.progress}%`,
              }}
            />

          </div>

        </div>

        <TaskSection />

        <AIInsights />

        {/* FOOTER */}

        <div className="text-center mt-16 mb-10">

          <p className="font-bold text-lg">
            🚀 DeadlineAI
          </p>

          <p className="text-gray-500 mt-2">
            Built using React • Tailwind CSS • JavaScript
          </p>

          <p className="text-gray-400 mt-2">
            AI Inspired Productivity & Deadline Management System
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;