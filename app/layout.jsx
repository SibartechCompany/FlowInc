import { Roboto } from "next/font/google";
import "./globals.css";
import NextUIContainer from "@/components/NextUIContainer";
import { Navbar } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIContainer>{children}</NextUIContainer>
      </body>
    </html>
  );
}
