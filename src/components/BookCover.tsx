import { motion } from 'framer-motion';
import { Story } from '../types/story';

interface BookCoverProps {
  story: Story;
  onStartReading: () => void;
}

export default function BookCover({ story, onStartReading }: BookCoverProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-2xl mx-auto"
    >
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-48 relative">
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{story.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{story.summary}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <div className="text-gray-600">
            <span className="font-medium">Age Group:</span> {story.age_group}
          </div>
          <div className="flex gap-4 text-gray-500">
            <span>👍 {story.votes}</span>
            <span>📖 {story.times_read} reads</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartReading}
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          Start Reading Book
        </motion.button>
      </div>
    </motion.div>
  );
}