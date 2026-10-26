export default function StatCard({ titulo, valor, icono, bgColor, textColor }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex items-center gap-5">
      <div className={`p-4 ${bgColor} ${textColor} rounded-xl`}>{icono}</div>
      <div>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
          {titulo}
        </p>
        <p className="text-3xl font-black text-slate-700 mt-1">{valor}</p>
      </div>
    </div>
  );
}
