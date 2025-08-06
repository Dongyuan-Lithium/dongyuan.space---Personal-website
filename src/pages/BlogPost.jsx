import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Sample blog post content
const blogPosts = {
  'first-steps-in-web-development': {
    title: 'My First Steps in Web Development',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Tech',
    tags: ['Web Development', 'React', 'Learning'],
    content: `
# My First Steps in Web Development

## The Beginning

It all started with a simple curiosity about how websites work. I remember the first time I opened the browser's developer tools and saw the HTML structure of a webpage. It was like discovering a new language that could create entire worlds on the internet.

## Learning HTML and CSS

My journey began with the fundamentals:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>
\`\`\`

The excitement of seeing my first webpage load in the browser was indescribable. From there, I dove into CSS to make things look beautiful.

## The JavaScript Revelation

When I discovered JavaScript, everything changed. Suddenly, websites could be interactive and dynamic. I spent hours experimenting with:

- DOM manipulation
- Event handling
- AJAX requests
- Local storage

## Modern Frameworks

As I progressed, I explored modern frameworks like React. The component-based architecture was a game-changer:

\`\`\`jsx
function Welcome() {
  const [name, setName] = useState('World');
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
    </div>
  );
}
\`\`\`

## Lessons Learned

1. **Start with the basics** - HTML, CSS, and JavaScript are still the foundation
2. **Build projects** - Theory is important, but building real projects teaches you the most
3. **Stay curious** - The web development landscape is constantly evolving
4. **Community matters** - Learning from others and sharing knowledge accelerates growth

## Looking Forward

The journey never really ends. There's always something new to learn, whether it's:

- New frameworks and libraries
- Performance optimization
- Accessibility best practices
- Emerging technologies like WebAssembly

## Conclusion

Web development has taught me not just about coding, but about problem-solving, creativity, and the power of the internet to connect people. Every line of code is an opportunity to create something meaningful.

The best advice I can give to anyone starting this journey: **just start**. Build something, break it, fix it, and repeat. The learning never stops, and that's what makes it exciting.
    `
  },
  'finding-balance-in-digital-age': {
    title: 'Finding Balance in the Digital Age',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    category: 'Life',
    tags: ['Digital Wellness', 'Mindfulness', 'Productivity'],
    content: `
# Finding Balance in the Digital Age

## The Digital Dilemma

We live in a world where information flows like a never-ending river. Social media feeds, news updates, work emails, and personal messages all compete for our attention. The question becomes: how do we navigate this digital landscape without losing ourselves?

## The Attention Economy

Our attention has become the most valuable currency in the digital age. Every app, website, and platform is designed to capture and hold our focus for as long as possible. The algorithms know us better than we know ourselves.

### The Impact on Our Lives

- **Reduced focus** - Constant notifications fragment our attention
- **Comparison culture** - Social media creates unrealistic standards
- **Information overload** - Too much data, too little meaning
- **Digital fatigue** - Mental exhaustion from constant connectivity

## My Personal Journey

I realized I was spending more time consuming content than creating it. My phone was the first thing I checked in the morning and the last thing I looked at before bed. Something had to change.

### The Wake-Up Call

It was a simple moment that changed everything. I was sitting with friends at dinner, and everyone was on their phones. We were physically together but mentally elsewhere. That's when I knew I needed to find a better balance.

## Strategies That Worked

### 1. Digital Minimalism

I started by auditing my digital life:
- Uninstalled apps I didn't use
- Unfollowed accounts that didn't add value
- Turned off non-essential notifications

### 2. Intentional Technology Use

Instead of mindless scrolling, I began to use technology with purpose:
- Set specific times for checking social media
- Used apps that track and limit screen time
- Created tech-free zones in my home

### 3. Mindfulness Practices

I incorporated mindfulness into my daily routine:
- Morning meditation without devices
- Regular digital detox weekends
- Mindful consumption of content

## The Results

After implement
    `
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-xl text-surface-600 dark:text-surface-400">
          The requested blog post could not be found.
        </p>
        <Link to="/blog" className="mt-6 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-full font-medium transition-colors">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/blog" className="flex items-center text-surface-600 dark:text-surface-400 hover:text-accent-600 dark:hover:text-accent-400 mb-8">
        <ArrowLeft size={20} />
        Back to Blog
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-2 mb-4 text-surface-500 text-sm">
          <Clock size={16} />
          {post.readTime}
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="prose dark:prose-invert text-surface-600 dark:text-surface-400 leading-relaxed"
        >
          {post.content}
        </ReactMarkdown>

        <div className="flex items-center gap-2 mt-8">
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
    </div>
  )
} 