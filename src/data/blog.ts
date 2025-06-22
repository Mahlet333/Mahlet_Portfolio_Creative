import { BarChart, Feather, Music } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: 'The Philosophy of Neural Networks',
    date: 'October 26, 2023',
    category: 'Tech',
    icon: BarChart,
    color: '#3498db',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    content: `
      <p>Neural networks are more than just mathematical models; they represent a fundamental shift in how we approach problem-solving. Unlike traditional algorithms, which require explicit instructions, neural networks learn from data, identifying patterns and making decisions in a way that mimics human intuition.</p>
      <p>This post explores the philosophical implications of this shift, from the nature of creativity to the definition of intelligence itself.</p>
    `
  },
  {
    id: 2,
    title: 'A Journey Through Creative Coding',
    date: 'November 15, 2023',
    category: 'Creative',
    icon: Feather,
    color: '#9b59b6',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    content: `
      <p>Creative coding is where art and technology intersect. It's about using code as a medium for expression, creating visuals, sounds, and experiences that are both beautiful and interactive.</p>
      <p>We'll delve into the tools and techniques that power this exciting field, from p5.js to TouchDesigner, and explore how you can start your own creative coding journey.</p>
    `
  },
    {
    id: 3,
    title: 'The Unseen Symphony: Composing with AI',
    date: 'December 5, 2023',
    category: 'Music',
    icon: Music,
    color: '#e74c3c',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    content: `
      <p>Can AI compose music that moves us? This post explores the world of algorithmic composition, where artists and developers are creating AI systems that can generate everything from classical symphonies to modern electronic tracks.</p>
      <p>We'll look at the technology behind these systems, listen to some of their creations, and ponder the future of music in an age of artificial creativity.</p>
    `
  }
];

export const blogFilters = [
  { id: 'all', label: 'All Posts', color: '#FFFFFF' },
  { id: 'Tech', label: 'Tech', icon: BarChart, color: '#3498db' },
  { id: 'Creative', label: 'Creative', icon: Feather, color: '#9b59b6' },
  { id: 'Music', label: 'Music', icon: Music, color: '#e74c3c' },
]; 