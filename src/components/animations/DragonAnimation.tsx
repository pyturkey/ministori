import { motion } from 'framer-motion';

export default function DragonAnimation() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-blue-400 to-purple-300">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: [-100, 100, -100],
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Simple dragon shape using divs */}
        <div className="relative">
          {/* Body */}
          <motion.div
            className="w-48 h-24 bg-purple-600 rounded-full relative"
            animate={{
              scaleX: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Head */}
            <div className="absolute -left-12 top-4 w-16 h-16 bg-purple-700 rounded-full">
              {/* Eye */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full" />
            </div>
            
            {/* Wings */}
            <motion.div
              className="absolute -top-8 left-12 w-24 h-24 bg-purple-500 rotate-[-30deg] origin-bottom"
              animate={{
                rotate: [-30, -40, -30],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Tail */}
            <motion.div
              className="absolute -right-16 top-8 w-20 h-8 bg-purple-600 rounded-full origin-left"
              animate={{
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Clouds in background */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-10 bg-white/50 rounded-full"
        animate={{
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}