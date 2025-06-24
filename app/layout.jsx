import { Roboto } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
