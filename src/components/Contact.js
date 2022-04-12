import axios from 'axios'
import copy from 'clipboard-copy'

const Contact = ({content}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    if(!event.currentTarget.reportValidity())
      return
    const data = new FormData(event.currentTarget)
    event.currentTarget.reset()
    axios.post('https://formspree.io/f/mgednvep', data)
  }
  return (
    <section id="contact" className="px-4 md:px-12">
      <div className="max-w-screen-xl mt-12 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-8 md:py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-center md:text-left">{content.contact}</h2>
              <div className="text-gray-700 mt-6 text-center md:text-left">
                <p className="font-bold">Email</p>
                <div className="flex align-center justify-center md:justify-start text-lg">
                  <p className="mt-1 ml-5 md:ml-0" id="contactEmail">patricio@flood.ar</p>
                  <button onClick={() => copy('patricio@flood.ar')} className={`ml-1 group`}>
                    <svg className="ml-1 h-10 group-focus:hidden hover:scale-105 ease-in-out duration-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                    <svg className="ml-1 h-10 hidden group-focus:block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                  </button>
                </div>
                <p className="font-bold mt-2 mb-1">LinkedIn</p>
                <a className="underline font-lg" href="https://www.linkedin.com/in/patricio-flood/" target="_blank" rel="noreferrer">Patricio-Flood</a>
              </div>
            </div>
            <div className="mt-8 text-center justify-center hidden md:flex">
              <object className="h-56" data="/images/contact.svg"></object>
            </div>
          </div>
          <form onSubmit={ handleSubmit }>
            <div>
              <label className="uppercase text-sm text-gray-600 font-bold" htmlFor="name">{ content.name }</label>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="" name="name"
                id="name" required/>
            </div>
            <div className="mt-8">
              <label className="uppercase text-sm text-gray-600 font-bold" htmlFor="email">EMAIL</label>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" name="email" id="email" required/>
            </div>
            <div className="mt-8">
              <label className="uppercase text-sm text-gray-600 font-bold" htmlFor="message">{ content.message }</label>
              <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="message" id="message" required></textarea>
            </div>
            <div className="mt-8">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-green-800 hover:bg-green-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                { content.send }
              </button>
            </div>
          </form>
        </div>
      </section>
  )
}

export default Contact