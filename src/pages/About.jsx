import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Design', level: 65 }
]

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Tech Company',
    period: '2023 - Present',
    description: 'Building modern web applications with React and Node.js'
  },
  {
    title: 'Frontend Developer',
    company: 'Startup',
    period: '2022 - 2023',
    description: 'Developed user interfaces and improved user experience'
  }
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.div
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-4xl font-bold"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          D
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dongyuan</h1>
        <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          A passionate developer and writer exploring the intersection of technology and human experience. 
          I believe in creating meaningful solutions that make a difference.
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">My Story</h2>
          <div className="space-y-4 text-surface-600 dark:text-surface-400 leading-relaxed">
            <p>
              I started my journey in technology with a simple curiosity about how things work on the web. 
              What began as learning HTML and CSS has evolved into a passion for building meaningful digital experiences.
            </p>
            <p>
              Beyond coding, I'm deeply interested in how technology shapes our lives and relationships. 
              I write about both technical challenges and the human side of technology - the lessons learned, 
              the connections made, and the impact we can have.
            </p>
            <p>
              When I'm not coding or writing, you'll find me exploring new technologies, reading about 
              philosophy and psychology, or simply enjoying a good conversation about the future of our digital world.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-surface-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-sm text-surface-500">{exp.period}</span>
              </div>
              <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">{exp.company}</p>
              <p className="text-surface-600 dark:text-surface-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="text-surface-600 dark:text-surface-400 mb-8">
          I'm always interested in new opportunities and meaningful conversations.
        </p>
        <div className="flex justify-center gap-4">
          <motion.a
            href="mailto:dongyuan@example.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full glass hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            title="Email"
          >
            <Mail size={24} className="text-accent-600 dark:text-accent-400" />
          </motion.a>
          <motion.a
            href="https://github.com/dongyuan"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full glass hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            title="GitHub"
          >
            <Github size={24} className="text-accent-600 dark:text-accent-400" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/dongyuan"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full glass hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={24} className="text-accent-600 dark:text-accent-400" />
          </motion.a>
          <motion.a
            href="https://twitter.com/dongyuan"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full glass hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            title="Twitter"
          >
            <Twitter size={24} className="text-accent-600 dark:text-accent-400" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
```

```
