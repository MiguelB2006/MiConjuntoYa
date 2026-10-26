import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/admin/Sidebar";
import Header from "./components/shared/Header";
import Dashboard from "./pages/admin/Dashboard";
import Visitantes from "./pages/admin/Visitantes";
import PQRS from "./pages/admin/PQRS";
import ZonasComunes from "./pages/admin/ZonasComunes";
import DashboardResidente from "./pages/residente/DashboardResidente";
import Comunicados from "./pages/admin/Comunicados";
import AlertasCorrespondencia from "./pages/admin/AlertasCorrespondencia";
import SidebarResidente from "./components/residente/SidebarResidente";
import ComunicadosResidente from "./pages/residente/ComunicadosResidente";
import MisVisitas from "./pages/residente/MisVisitas";
import MisReservas from "./pages/residente/MisReservas";
import MisPQRS from "./pages/residente/MisPQRS";

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(true);

  return (
    <Router>
      <Routes>
        {/* --- PANEL DE ADMINISTRADOR --- */}
        <Route
          path="/*"
          element={
            <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
              <Sidebar menuAbierto={menuAbierto} />
              <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <Header
                  menuAbierto={menuAbierto}
                  setMenuAbierto={setMenuAbierto}
                />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/visitantes" element={<Visitantes />} />
                  <Route path="/pqrs" element={<PQRS />} />
                  <Route path="/zonas" element={<ZonasComunes />} />
                  <Route path="/comunicados" element={<Comunicados />} />
                  <Route path="/alertas" element={<AlertasCorrespondencia />} />
                </Routes>
              </main>
            </div>
          }
        />

        {/* --- PANEL DE RESIDENTE --- */}
        <Route
          path="/residente/*"
          element={
            <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
              <SidebarResidente menuAbierto={menuAbierto} />

              <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <Header
                  menuAbierto={menuAbierto}
                  setMenuAbierto={setMenuAbierto}
                />

                <Routes>
                  <Route path="/" element={<DashboardResidente />} />
                  <Route
                    path="/comunicados"
                    element={<ComunicadosResidente />}
                  />
                  <Route path="/visitas" element={<MisVisitas />} />
                  <Route path="/reservas" element={<MisReservas />} />
                  <Route path="/pqrs" element={<MisPQRS />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
