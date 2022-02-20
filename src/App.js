import Footer from './components/Footer'
import Jumbotron from './components/Header'
import Projects from './components/Projects'
import Nav from './components/Nav'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
function App() {
  return (
    <div className="App">
        <Jumbotron />
        <Nav />
        <Projects />
        <Footer/>
    </div>
  );
}

export default App;
