import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Story } from '../types/story';
import StoryPageAnimation from './StoryPageAnimation';

interface StoryReaderProps {
  story: Story;
  currentPage: number;
  onPageChange: (page: number) => void;
  onReturnToCover: () => void;
}

export default function StoryReader({ story, currentPage, onPageChange, onReturnToCover }: StoryReaderProps) {
  const currentPageData = story.pages.find(page => page.page_number === currentPage);

  if (!currentPageData) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-50">
        <div className="h-[75vh] relative p-8">
          <AnimatePresence mode="wait">
            <StoryPageAnimation
              key={currentPage}
              pageNumber={currentPage}
              pageContent={currentPageData.content}
              imagePath={currentPageData.animation_src}
            />
          </AnimatePresence>
        </div>
        
        <div className="h-[25vh] bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 h-full grid grid-cols-12 gap-4 items-center">
            <div className="col-span-2 flex justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => currentPage === 1 ? onReturnToCover() : onPageChange(currentPage - 1)}
                className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
              >
                {currentPage === 1 ? 'Back to Cover' : 'Previous Page'}
              </motion.button>
            </div>
            
            <div className="col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <p className="text-xl text-gray-800 mb-4">{currentPageData.content}</p>
                  <p className="text-sm text-gray-500">Page {currentPage} of {story.pages.length}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="col-span-2 flex justify-end">
              {currentPage < story.pages.length ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPageChange(currentPage + 1)}
                  className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
                >
                  Next Page
                </motion.button>
              ) : (
                <Link href="/stories">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg bg-secondary-500 text-white font-medium hover:bg-secondary-600 transition-colors"
                  >
                    All Stories
                  </motion.button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}