import { useState, useEffect } from 'react'

const Navbar = ({content, language, handleToggleLenguage}) => {

  const [navbarTransparent, setNavbarTransparent] = useState(true)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarTranparency)
  }, [])

  const changeNavbarTranparency = () => {
    if (window.scrollY >= 1) {
      setNavbarTransparent(false)
    } else {
      setNavbarTransparent(true)
    }
  }

  const handleToggleMenu = () => setMenu(!menu)
  const handleCloseMenu = () => setMenu(false)

  return(
    <nav id="header" className={`${(navbarTransparent && !menu)?'bg-opacity-0':''} fixed w-full z-30 top-0 text-white bg-green-900 ease-in-out duration-300`}>
          <div className="w-full lg:px-12 mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <a onClick={ handleCloseMenu } className="toggleColour no-underline hover:no-underline font-mono text-xl sm:text-2xl" href="/#">
               {'<Flood />'}
              </a>
            </div>
            <div className="block lg:hidden pr-4">
              <button onClick={ handleToggleMenu } className="flex items-center p-1 text-white focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                <svg className={`${ menu?'hidden':'' } fill-current h-6 w-6`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg className={`${ menu?'':'hidden' } fill-current h-6 w-6`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                </svg>
              </button>
            </div>
              <div onClick={ handleCloseMenu } className={`${ menu ? '' : 'hidden' } absolute w-full h-screen top-12 bg-opacity-0`}></div>
              <div className={`${ menu ? '' : 'hidden' } w-full h-[1px] bg-white bg-opacity-5 mt-2`}></div>
              <div className={`${ menu ? '' : 'hidden' } w-full flex-grow lg:flex lg:items-center lg:w-auto lg:bg-transparent text-black p-4 lg:p-0 z-20`} id="nav-content">
                <ul className="list-reset flex flex-col lg:flex-row lg:justify-end flex-1 items-center">
                  <li className="lg:mr-3 font-medium">
                    <a onClick={ handleCloseMenu } className="inline-block text-white hover:scale-105 py-2 px-4 ease-in-out duration-100" href="/#skills">{content.skills}</a>
                  </li>
                  <li className="lg:mr-3 font-medium">
                    <a onClick={ handleCloseMenu }  className="inline-block text-white hover:scale-105 py-2 px-4 ease-in-out duration-100" href="/#projects">{content.projects}</a>
                  </li>
                  <li className="lg:mr-3 font-medium">
                    <a onClick={ handleCloseMenu }  className="inline-block text-white hover:scale-105 py-2 px-4 ease-in-out duration-100" href="/#contact">{content.contact}</a>
                  </li>
                  <li>
                    <button id="navAction"
                      onClick={handleToggleLenguage}
                      className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-3 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-100 ease-in-out"
                    >
                      {language==='spanish'?'ES':'EN'}
                    </button>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
  )
}

export default Navbar