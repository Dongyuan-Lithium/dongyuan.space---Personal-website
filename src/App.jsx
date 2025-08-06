import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'blue', fontSize: '48px' }}>Dongyuan's Blog</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>Welcome to my personal website!</p>
      <button style={{ 
        padding: '10px 20px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Test Button
      </button>
    </div>
  )
}

export default App 