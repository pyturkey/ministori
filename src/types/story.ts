export interface StoryPage {
  page_number: number;
  content: string;
  animation_src: string; // Now used to store image path
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  age_group: string;
  votes: number;
  times_read: number;
  created_date: string;
  pages: StoryPage[];
}