import { useState } from "react";
import FormComunicado from "../../components/admin/comunicados/FormComunicado.jsx";
import ListaComunicados from "../../components/admin/comunicados/ListaComunicados.jsx";

export default function Comunicados() {
  const [comunicados, setComunicados] = useState([
    {
      id: 1,
      titulo: "Mantenimiento de Ascensores",
      mensaje:
        "Mañana de 8:00 AM a 12:00 PM la Torre 2 no tendrá servicio por mantenimiento preventivo.",
      fecha: "Hoy, 10:00 AM",
      prioridad: "Alta",
    },
    {
      id: 2,
      titulo: "Asamblea General",
      mensaje:
        "Recordamos que este sábado tendremos asamblea general ordinaria en el salón comunal.",
      fecha: "Ayer, 04:30 PM",
      prioridad: "Normal",
    },
  ]);

  const handlePublicar = (nuevoComunicado) => {
    setComunicados([nuevoComunicado, ...comunicados]);
  };

  const handleEliminar = (id) => {
    setComunicados(comunicados.filter((c) => c.id !== id));
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 h-full relative">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Comunicados Oficiales
        </h2>
        <p className="text-slate-500 mt-1">
          Publica información importante que será visible en el muro de todos
          los residentes.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Columna Izquierda: Formulario */}
        <div className="xl:col-span-1">
          <FormComunicado onPublicar={handlePublicar} />
        </div>

        {/* Columna Derecha: Historial */}
        <div className="xl:col-span-2">
          <ListaComunicados
            comunicados={comunicados}
            onEliminar={handleEliminar}
          />
        </div>
      </div>
    </div>
  );
}
