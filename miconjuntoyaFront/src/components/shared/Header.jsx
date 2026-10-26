import { Menu, Bell, User } from "lucide-react";

export default function Header({ menuAbierto, setMenuAbierto }) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl font-bold text-slate-800 hidden sm:block">
          Panel de Control
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 relative text-slate-500 hover:text-indigo-600 transition-colors">
          <Bell size={24} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}
