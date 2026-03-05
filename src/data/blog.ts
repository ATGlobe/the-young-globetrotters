export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'exploring-rome-with-kids',
    title: 'Exploring Rome with Kids: A Parent\'s Guide',
    excerpt: 'Rome is a living museum, but how do you keep the little ones engaged? Here are our top tips for a family-friendly Roman adventure.',
    content: `
      <p>Rome is one of the most fascinating cities in the world, but its vast history and crowded sites can be overwhelming for children. At The Young Globetrotters, we believe that the key to a successful family trip is engagement through storytelling and play.</p>
      
      <h3>1. Make History Come Alive</h3>
      <p>Instead of just visiting the Colosseum, tell them stories about the gladiators and the spectacles that took place there. Use our Rome book to introduce them to Axel and Tino's adventure before you go!</p>
      
      <h3>2. The Power of Gelato</h3>
      <p>Never underestimate the power of a gelato break. It's the perfect way to recharge and reward your young explorers after a morning of sightseeing.</p>
      
      <h3>3. Interactive Museums</h3>
      <p>Visit museums like Explora, the Children's Museum of Rome, where kids can learn through hands-on exhibits.</p>
      
      <p>Rome is a city that rewards curiosity. By preparing your children with stories and activities, you'll create memories that last a lifetime.</p>
    `,
    date: '2024-03-15',
    author: 'The Globetrotter Team',
    category: 'Travel Tips',
    image: 'https://picsum.photos/seed/rome-blog/1200/600'
  },
  {
    id: '2',
    slug: 'benefits-of-global-citizenship',
    title: 'The Benefits of Raising Global Citizens',
    excerpt: 'Why is it important for children to learn about different cultures from a young age? Discover the impact of global awareness on child development.',
    content: `
      <p>In an increasingly interconnected world, raising children with a global perspective is more important than ever. Global citizenship isn't just about travel; it's about empathy, curiosity, and understanding.</p>
      
      <h3>1. Fostering Empathy</h3>
      <p>By learning about how people live in different parts of the world, children develop a deeper sense of empathy and respect for diversity.</p>
      
      <h3>2. Critical Thinking</h3>
      <p>Exposure to different cultures encourages children to think critically about their own environment and the world around them.</p>
      
      <h3>3. Preparing for the Future</h3>
      <p>The skills learned through global awareness—communication, adaptability, and cultural competency—are essential for success in the 21st century.</p>
      
      <p>At The Young Globetrotters, we are proud to be part of your child's journey toward becoming a compassionate and informed global citizen.</p>
    `,
    date: '2024-03-10',
    author: 'Professor Owl',
    category: 'Education',
    image: 'https://picsum.photos/seed/global-blog/1200/600'
  }
];
