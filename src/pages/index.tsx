import { GetStaticProps } from 'next';
import Hero from '../components/Hero';
import StoryCard from '../components/StoryCard';
import Footer from '../components/Footer';
import { Story } from '../types/story';

interface HomeProps {
  stories: Story[];
}

export default function Home({ stories }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
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
          animation_html_code: '<!-- Cloud animation code -->'
        },
        {
          page_number: 2,
          content: 'As Lucy reached the top of the ladder, she watched the sunrise...',
          animation_html_code: '<!-- Sunrise animation code -->'
        },
        {
          page_number: 3,
          content: 'In the cloud kingdom, Lucy met a friendly cloud dragon...',
          animation_html_code: '<!-- Dragon animation code -->'
        }
      ]
    },
    // Add more stories as needed
  ];

  return {
    props: {
      stories
    },
    revalidate: 3600 // Revalidate every hour
  };
}