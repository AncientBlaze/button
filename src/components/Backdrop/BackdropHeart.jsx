import { motion } from "framer-motion";

const BackdropHeart = ({ children, onClick }) => (
  <motion.div
    initial={{ opacity: 0 ,}}
    animate={{ opacity: 1,y: 0 }}
    exit={{ opacity: 0 }}
    onClick={onClick}
    className="fixed top-0 right-0 w-full rounded-2xl h-screen flex justify-end items-center"
  >
    {children}
  </motion.div>
);

export default BackdropHeart;
