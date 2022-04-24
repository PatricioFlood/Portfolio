

import Project from './Project'

const Projects = ({content}) => {

  const projects = [
    {
      title: 'Flood Disney API',
      description: content.floodDisneyApp,
      image: '/images/flood-disney-api.jpg',
      website: 'https://disney-api.flood.ar/api-docs',
      repository: 'https://github.com/PatricioFlood/Flood-Disney-API'
    },
    {
      title: 'Flood Ladder',
      image: '/images/flood-ladder.jpg',
      description: content.floodLadder,
      website: 'https://ladder.flood.ar',
      repository: 'https://github.com/PatricioFlood/Flood-Ladder'
    },
    {
      title: 'WA Sticker App (Android)',
      image: '/images/wa-sticker-app.png',
      description: content.waStickerApp,
      website: 'https://play.google.com/store/apps/details?id=com.FloodApps.StickersDeWarap',
    },
    {
      title: 'Sales System (CRUD)',
      image: '/images/sales-system.jpg',
      description: content.salesSystem,
      website: 'https://salessystem.flood.ar/',
      repository: 'https://github.com/PatricioFlood/CodoaCodo/tree/main/CRUD'
    },
    {
      title: 'Huffman Compressor',
      image: '/images/huffman-compressor.jpg',
      description: content.huffmanCompressor,
      repository: 'https://github.com/PatricioFlood/HuffmanCompressor'
    },
    {
      title: 'Computer Architecture Helper',
      image: '/images/computer-architecture-helper.jpg',
      description: content.computerArchitectureHelper,
      repository: 'https://github.com/PatricioFlood/ComputerArchitectureHelper'
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
            <Project key={ index } project={ project } content={ content }/>
          ))}
        </div>
      </div>
    </section>
  )

}

export default Projects