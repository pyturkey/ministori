import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { Story } from '../../types/story';
import BookCover from '../../components/BookCover';
import StoryReader from '../../components/StoryReader';
import Footer from '../../components/Footer';

interface StoryDetailProps {
  story: Story;
}

export default function StoryDetail({ story }: StoryDetailProps) {
  const [isReading, setIsReading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {!isReading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <BookCover story={story} onStartReading={() => setIsReading(true)} />
            
            <div className="mt-16">
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/stories"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Browse All Stories →
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <StoryReader
            story={story}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onReturnToCover={() => setIsReading(false)}
          />
        )}
      </main>
      {!isReading && <Footer />}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, this would fetch from an API
  const stories = [
    {
      slug: 'cloud-adventure',
    },
    // Add more story slugs here
  ];

  return {
    paths: stories.map((story) => ({
      params: { slug: story.slug },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // In a real app, this would fetch from an API
  const story: Story = {
    id: '1',
    title: 'The Cloud Adventure',
    slug: 'cloud-adventure',
    summary: 'Join Lucy as she discovers the magical world above the clouds.',
    tags: ['Adventure', 'Fantasy'],
    age_group: '4-6 years',
    votes: 156,
    times_read: 1289,
    created_date: '2023-11-15',
    pages: [
      {
        page_number: 1,
        content: 'One day, Lucy found a magical ladder reaching up to the clouds. The fluffy white clouds danced above her head, inviting her to climb higher and higher.',
        animation_src: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        page_number: 2,
        content: 'As Lucy reached the top of the ladder, she watched in amazement as the sun began to rise, painting the sky in beautiful shades of pink and orange.',
        animation_src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        page_number: 3,
        content: 'In the cloud kingdom, Lucy met a friendly cloud dragon who offered to show her around his magical realm.',
        animation_src: 'https://images.unsplash.com/photo-1616262373426-18bfa28bafab?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  };

  if (params?.slug !== story.slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      story,
    },
    revalidate: 3600,
  };
}