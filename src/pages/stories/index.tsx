import { GetStaticProps } from 'next';
import { Story } from '../../types/story';
import StoryCard from '../../components/StoryCard';
import Footer from '../../components/Footer';

interface StoriesPageProps {
  stories: Story[];
}

export default function StoriesPage({ stories }: StoriesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">All Stories</h1>
          <a
            href="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Home
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real app, this would fetch from an API
  const stories: Story[] = [
    {
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
          content: 'One day, Lucy found a magical ladder reaching up to the clouds...',
          animation_html_code: '/images/stories/cloud-adventure/page-1.jpg'
        },
        {
          page_number: 2,
          content: 'As Lucy reached the top of the ladder, she watched the sunrise...',
          animation_html_code: '/images/stories/cloud-adventure/page-2.jpg'
        },
        {
          page_number: 3,
          content: 'In the cloud kingdom, Lucy met a friendly cloud dragon...',
          animation_html_code: '/images/stories/cloud-adventure/page-3.jpg'
        }
      ]
    },
    // Add more stories here
  ];

  return {
    props: {
      stories
    },
    revalidate: 3600
  };
}