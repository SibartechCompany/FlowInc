
import { ScrollContainer } from "@/components/ui/scroll";

export default function Home() {
  return (
    <main>
      {/* Contenido de la página con z-index mayor */}
      <div className="relative z-10">
        {/* Scroll Container con todas las animaciones principales */}
        <ScrollContainer />

        {/* Separador para contenido adicional si se necesita */}
        <div className="h-screen"></div>

        {/* Otras secciones que continúan con scroll normal */}
      </div>
    </main>
  );
}
