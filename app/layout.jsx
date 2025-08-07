import { Roboto } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import Navbar from "@/components/ui/navbar";

const inter = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "FlowInc - Activaciones y Experiencias",
  description:
    "Más de 500,000 clientes confían en FlowInc. +7 años de experiencia en activaciones, eventos, merchandising y publicidad exterior.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black relative`}>
        {/* Fondo animado */}
        <div className="fixed inset-0 z-0">
          {/* Gradiente principal */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

          {/* Grid animado más elegante */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(51,188,231,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(51,188,231,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          </div>

          {/* Efectos de luz dinámicos */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#33bce7]/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e01580]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#634e99]/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Efectos adicionales para más dinamismo */}
          <div
            className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#33bce7]/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#e01580]/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Componentes principales */}
        <Navbar />
        {children}
         <div className="max-w-6xl mx-auto text-center relative border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 mt-10">
            <div>
              <h3 className="text-white font-bold mb-4">Servicios</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Activaciones</li>
                <li>Eventos</li>
                <li>Creatividad</li>
                <li>Logística</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Empresa</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Quiénes Somos</li>
                <li>Nuestro Proceso</li>
                <li>Cobertura</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contacto</h3>
              <ul className="text-gray-400 space-y-2">
                <li>info@flowinc.com</li>
                <li>+57 300 123 4567</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Síguenos</h3>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  📱
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  📷
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  💼
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-gray-400">
              © 2024 Flow Inc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
