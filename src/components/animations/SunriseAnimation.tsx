import { motion } from 'framer-motion';

export default function SunriseAnimation() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-purple-300 via-pink-200 to-orange-200 overflow-hidden">
      <motion.div
        className="absolute w-32 h-32 bg-yellow-400 rounded-full filter blur-sm"
        initial={{ y: 400, opacity: 0.3 }}
        animate={{
          y: 100,
          opacity: 1,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Rays of light */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1.2 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-2 bg-yellow-200 absolute top-1/2 left-0 rotate-0" />
        <div className="w-full h-2 bg-yellow-200 absolute top-1/2 left-0 rotate-45" />
        <div className="w-full h-2 bg-yellow-200 absolute top-1/2 left-0 rotate-90" />
        <div className="w-full h-2 bg-yellow-200 absolute top-1/2 left-0 rotate-135" />
      </motion.div>
    </div>
  );
}