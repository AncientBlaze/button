import PropTypes from 'prop-types';
import { motion } from "framer-motion";

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};



function SimpleCard({
  title, text }) {
  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1.1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <motion.div variants={cardVariants} whileHover={"visible"}>
        <div className="h-auto w-[160px] rounded-3xl border-2 border-[#006944] overflow-hidden">
          <img className="h-full w-full bg-cover" src={title} alt="" />
        </div>
      </motion.div>
      <p className="text-center p-1 font-jost font-medium text-[#006944]">{text}</p>
    </>

  );
}

export default SimpleCard;