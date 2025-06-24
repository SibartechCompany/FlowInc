import Navbar from "@/components/ui/navbar/Navbar";
import { QuienesSomos } from "@/components/ui/sections";
import { MouseTrail } from "@/components/ui/cursor";
import { ScrollContainer } from "@/components/ui/scroll";

export default function Home() {
  return (
    <main
      className="bg-black relative"
      style={{
        cursor:
          'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIGZpbGw9InJnYmEoNTEsIDE4OCwgMjMxLCAwLjgpIi8+Cjwvc3ZnPgo=") 12 12, auto',
      }}
    >
      {/* Background animado para el banner */}
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

      {/* Contenido de la página con z-index mayor */}
      <div className="relative z-10">
        <MouseTrail />
        <Navbar />

        {/* Scroll Container con Banner y QuienesSomos integrados */}
        <ScrollContainer />

        {/* Separador para contenido adicional después del scroll animado */}
        <div className="h-screen"></div>

        {/* Otras secciones que continúan con scroll normal */}
        <QuienesSomos />
      </div>
    </main>
  );
}
