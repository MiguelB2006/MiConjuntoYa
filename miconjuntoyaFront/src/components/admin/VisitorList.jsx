import { Link } from "react-router-dom";

const visitantesRecientes = [
  {
    id: 1,
    nombre: "Carlos Ramírez",
    tipo: "Familiar",
    apto: "304",
    hora: "10:30 AM",
    estado: "En conjunto",
  },
  {
    id: 2,
    nombre: "Domicilios Rapidos",
    tipo: "Servicio",
    apto: "512",
    hora: "11:15 AM",
    estado: "Salió",
  },
  {
    id: 3,
    nombre: "Ana Gómez",
    tipo: "Visita",
    apto: "102",
    hora: "01:45 PM",
    estado: "En conjunto",
  },
];

export default function VisitorList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-lg text-slate-800">Últimos Ingresos</h3>
        {/* Aquí se cambia el <a> por el <Link> */}
        <Link
          to="/visitantes"
          className="text-sm text-indigo-600 font-semibold hover:underline"
        >
          Ver todos
        </Link>
      </div>
      <div className="p-5">
        <div className="space-y-4">
          {visitantesRecientes.map((visita) => (
            <div
              key={visita.id}
              className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                  {visita.nombre.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-700">{visita.nombre}</p>
                  <p className="text-xs text-slate-500 font-medium">
                    Apto {visita.apto} - {visita.tipo}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-700">
                  {visita.hora}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-md font-bold inline-block mt-1 ${
                    visita.estado === "En conjunto"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {visita.estado}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
