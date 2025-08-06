import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            <Link to="/">Dongyuan</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.path} {...item} isActive={location.pathname === item.path} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-2"
            >
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.path}
                  {...item}
                  isActive={location.pathname === item.path}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

function NavLink({ path, label, isActive }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative"
    >
      <Link
        to={path}
        className={`px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? 'text-accent-600 dark:text-accent-400 font-medium'
            : 'text-surface-700 dark:text-surface-300 hover:text-accent-600 dark:hover:text-accent-400'
        }`}
      >
        {label}
      </Link>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.div>
  )
}

function MobileNavLink({ path, label, isActive, onClick }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`block px-4 py-3 rounded-lg transition-colors ${
        isActive
          ? 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 font-medium'
          : 'text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800'
      }`}
    >
      {label}
    </Link>
  )
}
```

```
