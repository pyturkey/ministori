import { motion } from 'framer-motion';
import Image from 'next/image';

interface StoryPageAnimationProps {
  pageNumber: number;
  pageContent: string;
  imagePath: string;
}

export default function StoryPageAnimation({ imagePath }: StoryPageAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={imagePath}
        alt="Story illustration"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        priority
      />
    </motion.div>
  );
}