import { Search, UserPlus } from "lucide-react";
import { useState } from "react";
import TablaVisitantes from "../../components/admin/visitantes/TablaVisitantes.jsx";
import ModalNuevoVisitante from "../../components/admin/visitantes/ModalNuevoVisitante.jsx";

export default function Visitantes() {
  const [showModal, setShowModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [visitantes, setVisitantes] = useState([
    {
      id: 1,
      nombre: "Carlos Gómez",
      apto: "304",
      torre: "2",
      tipo: "Familiar",
      ingreso: "02:00 PM",
      estado: "En conjunto",
    },
    {
      id: 2,
      nombre: "Técnico Claro",
      apto: "102",
      torre: "1",
      tipo: "Mantenimiento",
      ingreso: "10:00 AM",
      estado: "Salió",
    },
  ]);

  const handleGuardarIngreso = (nuevoVisitante) => {
    setVisitantes([nuevoVisitante, ...visitantes]);
    setShowModal(false);
  };

  const handleMarcarSalida = (id) => {
    setVisitantes(
      visitantes.map((v) => (v.id === id ? { ...v, estado: "Salió" } : v)),
    );
  };

  const visitantesFiltrados = visitantes.filter(
    (v) =>
      v.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      v.apto.includes(busqueda),
  );

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 h-full relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
            Control de Visitantes
          </h2>
          <p className="text-slate-500 mt-1">
            Gestiona el ingreso y salida de personas al conjunto.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md whitespace-nowrap"
        >
          <UserPlus size={20} /> Registrar Ingreso
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex items-center gap-3">
        <Search className="text-slate-400 shrink-0" size={20} />
        <input
          type="text"
          placeholder="Buscar visitante por nombre o apartamento..."
          className="w-full bg-transparent outline-none text-slate-700"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <TablaVisitantes
        visitantes={visitantesFiltrados}
        onMarcarSalida={handleMarcarSalida}
      />

      <ModalNuevoVisitante
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleGuardarIngreso}
      />
    </div>
  );
}
