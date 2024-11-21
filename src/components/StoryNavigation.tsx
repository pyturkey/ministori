import { motion } from 'framer-motion';

interface StoryNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function StoryNavigation({ currentPage, totalPages, onPageChange }: StoryNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`px-6 py-2 rounded-full ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-primary-500 text-white'
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </motion.button>

      <div className="text-lg font-medium">
        Page {currentPage} of {totalPages}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className={`px-6 py-2 rounded-full ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-primary-500 text-white'
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </motion.button>
    </div>
  );
}