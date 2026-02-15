import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/96170427277"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-[hsl(0,0%,100%)]" />
  </motion.a>
);

export default WhatsAppButton;
