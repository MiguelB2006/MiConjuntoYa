import { Package, Bell } from "lucide-react";

export default function NotificacionesResidente({ notificaciones = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-lg text-slate-800">
          Alertas y Correspondencia
        </h3>
      </div>
      <div className="p-5 space-y-4">
        {notificaciones.length > 0 ? (
          notificaciones.map((noti) => (
            <div
              key={noti.id}
              className={`flex gap-4 p-4 border rounded-xl ${
                noti.tipo === "paquete"
                  ? "border-amber-100 bg-amber-50/50"
                  : "border-indigo-100 bg-indigo-50/50"
              }`}
            >
              {noti.tipo === "paquete" ? (
                <Package className="text-amber-500 mt-1" size={24} />
              ) : (
                <Bell className="text-indigo-500 mt-1" size={24} />
              )}
              <div>
                <p className="font-bold text-slate-700">{noti.titulo}</p>
                <p className="text-sm text-slate-500 mt-1">{noti.detalle}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500 text-center py-4">
            No tienes notificaciones recientes.
          </p>
        )}
      </div>
    </div>
  );
}
