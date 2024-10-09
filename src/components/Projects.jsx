import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">PROJECTS</h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full lg:w-1/4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  width={250}
                  height={250}
                  className="mb-6 rounded"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              </a>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={techIndex}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
