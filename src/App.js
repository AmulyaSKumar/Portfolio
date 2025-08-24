import Main from './components/Main';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Achievements from './components/Achievements';
import CodeFooter from './components/footer';
import ScrollToTopButton from './components/ScrollTop';

function App() {

  return (
    <div className='font-poppins select-none text-gray-900 bg-white transition duration-500 min-h-screen'>
      <Navbar />
      <Main />
      <About />
      <Experiences />
      <Skills/>
      <Projects />
      <Achievements />
      <CodeFooter/>
      <ScrollToTopButton/>
    </div>
  )
}

export default App