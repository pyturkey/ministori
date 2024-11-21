import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Unleash Your Child's Imagination
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90">
            Discover magical stories with interactive animations that bring imagination to life
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
          >
            Start Reading
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}