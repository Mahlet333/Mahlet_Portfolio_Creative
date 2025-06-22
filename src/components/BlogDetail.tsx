import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog'; // Assuming you create this data file
import { ArrowLeft, MessageSquare } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">404</h1>
          <p className="text-xl mt-4">Blog post not found.</p>
          <button
            onClick={() => navigate('/blog')}
            className="mt-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-semibold">Back</span>
        </button>

        <main>
          <div className="text-center mb-12">
            <h1
              className="text-4xl sm:text-6xl font-bold text-white mb-2"
              style={{ color: post.color }}
            >
              {post.title}
            </h1>
            <p className="text-lg text-gray-400">{post.date}</p>
          </div>

          <div className="w-full h-64 sm:h-96 bg-gray-800 rounded-2xl mb-8 overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <article className="prose prose-invert lg:prose-xl max-w-none mx-auto text-gray-300">
            {post.content}
          </article>

          <div className="mt-16 border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6" />
              Leave your comments
            </h2>
            <form className="flex flex-col sm:flex-row items-start gap-4">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full sm:flex-grow h-24 p-4 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
              ></textarea>
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors"
              >
                Button
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogDetail; 