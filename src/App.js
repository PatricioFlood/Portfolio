import { useState } from 'react' 
import lang from './lang/index'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  AOS.init()

  const [language, setLanguage] = useState('english')
  
  const content = language === 'spanish' ? lang.es : lang.en

  const handleToggleLenguage = () => {
    if(language === 'spanish')
      setLanguage('english')
    else
      setLanguage('spanish')
  }

  return (
    <>
        <Navbar content={ content } 
          language={ language } 
          handleToggleLenguage={ handleToggleLenguage } 
        />
        <Profile content={ content } />
        <Skills content={ content } />
        <Projects content={ content } />
        <Contact content={ content }/>
        <Footer content={ content }/>
    </>
  );
}

export default App;
