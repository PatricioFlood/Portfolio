const Profile = ({content}) => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"  style={{background: "url('/images/background.webp')"}}>
      <div className="w-full h-full bg-black bg-opacity-80">
        <div className="pt-16 xl:pt-10 2xl:py-20 pb-6 lg:min-h-screen max-w-4xl flex items-center h-auto flex-wrap mx-auto">

          {/* <!--Main Col--> */}
          <div id="profile" className="w-full flex mt-8 mb-4">
            <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white bg-opacity-75 mx-4 sm:mx-6 lg:mx-0">


              <div className="py-6 px-4 md:px-12 text-center lg:text-left">
                {/* <!-- Image for mobile view--> */}
                  <img src="/images/profile.webp" alt="profile" className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" />
                  
                <h1 className="text-3xl font-bold pt-4 lg:pt-0">Patricio Tomás Flood</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-900 opacity-20"></div>
                <p className="pt-4 font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-800 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" /></svg>
                  Software Developer</p>
                <p className="pt-2 text-gray-600 text-sm flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-800 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" /></svg>
                  CABA - Argentina</p>
                <p className="whitespace-pre-line pt-8">
                  {content.description}
                </p>
                <div className="pt-5 pb-8">
                  <a href="#contact" className="inline-block mx-1 sm:mr-2 sm:mx-0 py-2 mt-3 bg-green-800 hover:bg-green-900 text-gray-200 font-bold px-4 rounded-full">
                    {content.contact}
                  </a>
                  <a href="/docs/Flood Patricio - CV.pdf" download className="inline-block mx-1 mt-3 sm:mx-0 bg-green-800 hover:bg-green-900 text-gray-200 font-bold py-2 px-4 rounded-full">
                    {content.download}
                  </a>
                </div>

                <div className="mt-1 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center lg:justify-start">
                  <a className="link mr-3" target="_blank" rel="noreferrer" href="https://github.com/PatricioFlood" data-tippy-content="@github_handle"><svg className="h-8 fill-current text-gray-600 hover:text-green-700 hover:scale-125 ease-in-out duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                  <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patricio-flood/" data-tippy-content="@linkedin_handle"><svg className="h-8 fill-current text-gray-600 hover:text-green-700 hover:scale-125 ease-in-out duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                </div>

              </div>

            </div>

            <div className="w-2/5 hidden lg:block rounded-r-lg h-[30rem] relative">
              {/* <!-- Big profile image for side bar (desktop) --> */}
              <img src="/images/profile.webp" alt="nombre" className="rounded-none lg:rounded-r-lg shadow-2xl h-[30rem] object-cover" />

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile