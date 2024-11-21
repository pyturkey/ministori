import { motion } from 'framer-motion';

export default function CloudAnimation() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-blue-300 to-blue-100">
      <motion.div
        className="absolute left-1/4 top-1/3"
        animate={{
          x: [0, 100, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-32 h-16 bg-white rounded-full filter drop-shadow-lg" />
        <div className="w-20 h-16 bg-white rounded-full absolute -top-6 -left-6" />
        <div className="w-20 h-16 bg-white rounded-full absolute -top-4 left-8" />
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-2/3"
        animate={{
          x: [0, -100, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div className="w-32 h-16 bg-white rounded-full filter drop-shadow-lg" />
        <div className="w-20 h-16 bg-white rounded-full absolute -top-6 -left-6" />
        <div className="w-20 h-16 bg-white rounded-full absolute -top-4 left-8" />
      </motion.div>
    </div>
  );
}