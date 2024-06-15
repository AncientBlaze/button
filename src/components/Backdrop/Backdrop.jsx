/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => (
    <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        onClick={onClick}
        className="overflow-y-auto fixed top-0 right-0 w-[100%] h-screen bg-[#00000079] flex justify-end items-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitScrollbarWidth: "none" }}
    >   
    <div className="w-[40%] h-full bg-white rounded-xl overflow-hidden">
        <div className="w-full h-full " style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitScrollbarWidth: "none" }}>
            {children}
        </div>
    </div>
    </motion.div>
);

export default Backdrop;

