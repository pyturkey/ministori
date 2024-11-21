import { motion } from 'framer-motion';
import Link from 'next/link';
import { Story } from '../types/story';

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link href={`/stories/${story.slug}`}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
          <p className="text-gray-600 mb-4">{story.summary}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>Age: {story.age_group}</span>
            <span>👍 {story.votes}</span>
            <span>📖 {story.times_read}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}