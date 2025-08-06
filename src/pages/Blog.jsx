import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, Tag } from 'lucide-react'

const blogPosts = [
  {
    slug: 'first-steps-in-web-development',
    title: 'My First Steps in Web Development',
    excerpt: 'Reflecting on the journey from HTML basics to building modern web applications with React, Vue, and other frameworks. The evolution of web development and what I\'ve learned along the way.',
    category: 'Tech',
    tags: ['Web Development', 'React', 'Learning'],
    date: 'Dec 15, 2024',
    readTime: '5 min read'
  },
  {
    slug: 'finding-balance-in-digital-age',
    title: 'Finding Balance in the Digital Age',
    excerpt: 'How I learned to navigate the constant stream of information and stay grounded in an increasingly connected world. Personal strategies for digital wellness.',
    category: 'Life',
    tags: ['Digital Wellness', 'Mindfulness', 'Productivity'],
    date: 'Dec 10, 2024',
    readTime: '7 min read'
  },
  {
    slug: 'the-art-of-problem-solving',
    title: 'The Art of Problem Solving in Programming',
    excerpt: 'Breaking down complex programming challenges and developing a systematic approach to debugging and optimization. Real examples from my coding journey.',
    category: 'Tech',
    tags: ['Programming', 'Problem Solving', 'Debugging'],
    date: 'Dec 5, 2024',
    readTime: '8 min read'
  },
  {
    slug: 'creativity-in-constraints',
    title: 'Creativity in Constraints',
    excerpt: 'How limitations can actually fuel creativity and innovation. Exploring how constraints in technology and life can lead to unexpected breakthroughs.',
    category: 'Life',
    tags: ['Creativity', 'Innovation', 'Constraints'],
    date: 'Nov 28, 2024',
    readTime: '6 min read'
  }
]

const categories = ['All', 'Tech', 'Life']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-surface-600 dark:text-surface-400">
          Thoughts, experiences, and insights from my journey
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 space-y-4"
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent-500 text-white'
                  : 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid gap-8"
      >
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card cursor-pointer"
            onClick={() => window.location.href = `/blog/${post.slug}`}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-surface-500 text-sm">
                <Calendar size={16} />
                {post.date}
              </div>
              <span className="text-surface-500 text-sm">•</span>
              <span className="text-surface-500 text-sm">{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-bold mb-3 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
              {post.title}
            </h2>

            <p className="text-surface-600 dark:text-surface-400 mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2">
              <Tag size={16} className="text-surface-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-surface-500 text-lg">No posts found matching your criteria.</p>
        </motion.div>
      )}
    </div>
  )
} 