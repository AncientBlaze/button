import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Circle = (props) => {
    return (
        <motion.div className="w-[120px] h-[190px] flex-1 items-center justify-between text-sm"
        initial={{scale: 0.9, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}>
            <br />
            <motion.img className="w-full border border-[#BCD871] rounded-full"
            src={props.imageUrl} alt={props.alt}
            initial={{scale: 1, opacity: 0}}
            animate={{scale: 1.1, opacity: 1}}
            transition={{duration: 0.3}}/>
            <p className="text-md font-jost font-bold flex justify-center items-center py-2 text-nowrap text-[#006944]">{props.text}</p>
        </motion.div>
    )
}

Circle.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    height: PropTypes.number,
    text: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default Circle;

