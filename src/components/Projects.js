

import Project from './Project'

const Projects = ({content}) => {

  const projects = [
    {
      title: 'Flood Disney App',
      description: content.floodDisneyApp,
      image: '/images/flood-disney-api.png',
      website: 'https://flood-disney-api.herokuapp.com/api-docs',
      repository: 'https://github.com/PatricioFlood/Flood-Disney-API'
    },
    {
      title: 'Flood Ladder',
      image: '/images/flood-ladder.png',
      description: content.floodLadder,
      website: 'https://ladder.flood.ar',
      repository: 'https://github.com/PatricioFlood/Flood-Ladder'
    }
  ]

  return (
    <section className="bg-white border-b py-8" id="projects">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {content.projects}
        </h1>
        <div className="flex mt-5 w-full justify-center text-gray-900 px-5 flex-wrap">
          {projects.map((project, index) => (
            <Project key={index} project={project}/>
          ))}
        </div>
      </div>
    </section>
  )

}

export default Projects