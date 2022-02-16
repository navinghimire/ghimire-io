import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Nav from './components/Nav'
import { AnimatePresence } from 'framer-motion'
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
