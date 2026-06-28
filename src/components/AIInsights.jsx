function AIInsights() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        🤖 AI Productivity Insights
      </h2>

      <div className="space-y-5">

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-xl p-5">

          <h3 className="font-bold text-lg">
            🎯 Focus Recommendation
          </h3>

          <p className="mt-2 text-gray-700">
            Complete your highest priority task first while your
            concentration is at its peak.
          </p>

        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded-xl p-5">

          <h3 className="font-bold text-lg">
            ⚡ Productivity Tip
          </h3>

          <p className="mt-2 text-gray-700">
            Use the 50-10 rule:
            50 minutes of focused work followed by a 10-minute break.
          </p>

        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 rounded-xl p-5">

          <h3 className="font-bold text-lg">
            📈 Daily Goal
          </h3>

          <p className="mt-2 text-gray-700">
            Aim to complete at least 80% of today's planned tasks
            to maintain consistent productivity.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIInsights;