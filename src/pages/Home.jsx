import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="gradient-text">Dongyuan</span>
        </h1>
        <p className="text-xl md:text-2xl text-surface-600 dark:text-surface-400 mb-8 max-w-2xl mx-auto">
          Exploring the intersection of technology and human experience through thoughtful writing and creative expression.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-full font-medium transition-colors">
            Read My Blog
          </button>
          <button className="px-8 py-4 glass hover:bg-surface-200 dark:hover:bg-surface-800 rounded-full font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
} 