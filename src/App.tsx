import ThemeToggle from './components/ThemeToggle'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Projects from './components/Projects'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ThemeToggle />
    </>
  )
}

export default App
