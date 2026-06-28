import { LayoutDashboard, CheckSquare, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-extrabold text-blue-600">
            🚀 DeadlineAI
          </h1>

          <p className="text-gray-500 text-sm">
            AI-Powered Productivity Dashboard
          </p>
        </div>

        <div className="flex gap-8 text-gray-700 font-semibold">

          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <LayoutDashboard size={20} />
            Dashboard
          </div>

          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <CheckSquare size={20} />
            Tasks
          </div>

          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <Sparkles size={20} />
            AI Insights
          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;