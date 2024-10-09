import { motion } from 'framer-motion';

const Technologies = () => {
  const techStack = [
    { name: 'HTML', icon: '🛠️' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '💻' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '📘' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2, // Stagger children animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="bg-black p-6 rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-4">Technologies & Languages</h2>
      <motion.ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techStack.map((tech, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-center p-4 border rounded-md bg-gray-800 shadow transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }} // Hover effect using Framer Motion
            whileTap={{ scale: 0.9 }}   // Click effect
          >
            <span className="text-2xl mr-2 text-white">{tech.icon}</span>
            <span className="text-lg font-semibold text-white">{tech.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Technologies;
