import {
  Package,
  BellRing,
  CheckCircle,
  Clock,
  Truck,
  User,
  Search,
  Archive,
  Inbox,
} from "lucide-react";
import { useState } from "react";

export default function AlertasCorrespondencia() {
  // 1. Estado simulado de los paquetes/correspondencia
  const [paquetes, setPaquetes] = useState([
    {
      id: "PQ-1025",
      residente: "Familia Gómez",
      apto: "304",
      torre: "2",
      tipo: "Caja Mediana",
      transportadora: "MercadoLibre",
      fecha: "Hoy, 10:30 AM",
      estado: "En Portería",
    },
    {
      id: "PQ-1024",
      residente: "Carlos Ruiz",
      apto: "501",
      torre: "3",
      tipo: "Sobre Documentos",
      transportadora: "Servientrega",
      fecha: "Ayer, 04:15 PM",
      estado: "En Portería",
    },
    {
      id: "PQ-1023",
      residente: "Ana Martínez",
      apto: "102",
      torre: "1",
      tipo: "Paquete Grande",
      transportadora: "Amazon",
      fecha: "15 Oct, 2026",
      estado: "Entregado",
    },
  ]);

  // 2. Estados del formulario
  const [residente, setResidente] = useState("");
  const [torre, setTorre] = useState("");
  const [apto, setApto] = useState("");
  const [tipo, setTipo] = useState("Caja Pequeña");
  const [transportadora, setTransportadora] = useState("");

  const [busqueda, setBusqueda] = useState("");

  // 3. Función para registrar un nuevo paquete
  const handleRegistrarPaquete = (e) => {
    e.preventDefault();
    if (!residente || !torre || !apto) return;

    const nuevoPaquete = {
      id: `PQ-${Math.floor(Math.random() * 10000) + 1000}`,
      residente,
      apto,
      torre,
      tipo,
      transportadora: transportadora || "No especificada",
      fecha: "Hace un momento", // Simulado
      estado: "En Portería",
    };

    // Agrega el nuevo paquete de primero en la lista
    setPaquetes([nuevoPaquete, ...paquetes]);

    // Limpia el formulario
    setResidente("");
    setTorre("");
    setApto("");
    setTipo("Caja Pequeña");
    setTransportadora("");
  };

  // 4. Función para marcar un paquete como recogido por el residente
  const marcarComoEntregado = (id) => {
    setPaquetes(
      paquetes.map((p) => (p.id === id ? { ...p, estado: "Entregado" } : p)),
    );
  };

  // Filtro de búsqueda
  const paquetesFiltrados = paquetes.filter(
    (p) =>
      p.residente.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.apto.includes(busqueda),
  );

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 h-full relative">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Alertas de Correspondencia
        </h2>
        <p className="text-slate-500 mt-1">
          Registra la llegada de paquetes y notifica automáticamente al
          residente.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* ==========================================
            COLUMNA IZQUIERDA: FORMULARIO DE REGISTRO
        ========================================== */}
        <div className="xl:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-6">
            <h3 className="font-bold text-lg text-slate-800 mb-5 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <BellRing size={20} />
              </div>
              Registrar Llegada
            </h3>

            <form className="space-y-4" onSubmit={handleRegistrarPaquete}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Residente Destinatario
                </label>
                <input
                  type="text"
                  placeholder="Ej. Familia Gómez"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  value={residente}
                  onChange={(e) => setResidente(e.target.value)}
                  required
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Torre
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 2"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                    value={torre}
                    onChange={(e) => setTorre(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Apto
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 304"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                    value={apto}
                    onChange={(e) => setApto(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Tipo de Paquete
                </label>
                <select
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm text-slate-700"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option>Sobre / Documentos</option>
                  <option>Caja Pequeña</option>
                  <option>Caja Mediana</option>
                  <option>Paquete Grande</option>
                  <option>Domicilio / Comida</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Empresa Transportadora
                </label>
                <input
                  type="text"
                  placeholder="Ej. Servientrega, MercadoLibre..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  value={transportadora}
                  onChange={(e) => setTransportadora(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex justify-center items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md"
              >
                <BellRing size={18} /> Registrar y Notificar
              </button>
            </form>
          </div>
        </div>

        {/* ==========================================
            COLUMNA DERECHA: HISTORIAL DE ENTREGAS
        ========================================== */}
        <div className="xl:col-span-2">
          {/* Barra de búsqueda */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex items-center gap-3">
            <Search className="text-slate-400 shrink-0" size={20} />
            <input
              type="text"
              placeholder="Buscar por residente o apartamento..."
              className="w-full bg-transparent outline-none text-slate-700"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <Archive size={20} className="text-slate-500" /> Últimas
                Entregas
              </h3>
            </div>

            <div className="p-5 space-y-4">
              {paquetesFiltrados.length > 0 ? (
                paquetesFiltrados.map((paquete) => (
                  <div
                    key={paquete.id}
                    className="p-5 border border-slate-200 rounded-xl flex flex-col md:flex-row gap-4 justify-between md:items-center transition-all hover:shadow-sm bg-white"
                  >
                    <div className="flex gap-4 items-start">
                      <div
                        className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center 
                        ${paquete.estado === "En Portería" ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-400"}`}
                      >
                        <Package size={24} />
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-slate-800 text-lg">
                            {paquete.residente}
                          </h4>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-bold border 
                            ${paquete.estado === "En Portería" ? "bg-amber-100 text-amber-700 border-amber-200" : "bg-emerald-100 text-emerald-700 border-emerald-200"}`}
                          >
                            {paquete.estado}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-600">
                          <span className="flex items-center gap-1.5 font-medium">
                            <User size={16} className="text-slate-400" /> T
                            {paquete.torre} - Apto {paquete.apto}
                          </span>
                          <span className="flex items-center gap-1.5 font-medium">
                            <Archive size={16} className="text-slate-400" />{" "}
                            {paquete.tipo}
                          </span>
                          <span className="flex items-center gap-1.5 font-medium">
                            <Truck size={16} className="text-slate-400" />{" "}
                            {paquete.transportadora}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-slate-400">
                          <Clock size={14} /> Recepción: {paquete.fecha}
                        </div>
                      </div>
                    </div>

                    {/* Botón para confirmar entrega al residente */}
                    <div className="mt-4 md:mt-0 flex justify-end">
                      {paquete.estado === "En Portería" ? (
                        <button
                          onClick={() => marcarComoEntregado(paquete.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl transition-colors border border-emerald-200"
                        >
                          <CheckCircle size={18} /> Entregar
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 px-4 py-2 text-slate-400 font-bold">
                          <CheckCircle size={18} /> Finalizado
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-500">
                  <Inbox size={40} className="text-slate-300 mx-auto mb-3" />
                  <p className="font-medium">
                    No se encontraron paquetes registrados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
