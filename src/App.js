import Main from './components/Main';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import BackgroundView from './Layout/BackgroundView';
import Skills from './components/Skills';
import CodeFooter from './components/footer';
import ScrollToTopButton from './components/ScrollTop';

function App() {

  return (
    <BackgroundView>
      <div className='font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500'>
        <Navbar />
        <Main />
        <Experiences />
        <Skills/>
        <Projects />
        <CodeFooter/>
        <ScrollToTopButton/>
      </div>
    </BackgroundView>
  )
}

export default App