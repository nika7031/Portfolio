import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="border-t border-stone-900 pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="my-10 text-center text-4xl"
        variants={childVariants}
      >
        Get in Touch
      </motion.h2>
      <motion.div
        className="text-center tracking-tighter"
        variants={containerVariants}
      >
        <motion.p className="my-4" variants={childVariants}>
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="#"
          className="border-b"
          variants={childVariants}
          whileHover={{ scale: 1.1, color: "#ffffff" }} 
          transition={{ duration: 0.3 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
