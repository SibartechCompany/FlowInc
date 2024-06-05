// components/WhatsAppButton.js
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573154852832"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
