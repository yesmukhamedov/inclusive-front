import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div className="flex items-center justify-center h-screen">
      <motion.img
        src={"/logo.png"}
        alt="Loading..."
        animate={{
          rotate: [0, 360], 
          scale: [0.3, 0.5], 
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
        }}
      />
    </motion.div>
  );
};

export default Loader;
