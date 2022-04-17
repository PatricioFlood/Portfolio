const Project = ({project, content}) => {
  const { title, description, image, website, repository } = project
  return (
    <div className="group w-[30rem] h-[15rem] [perspective:2000px] mb-5 mx-2">
      <div className="w-full h-full relative shadow-xl transition-transform ease-in-out duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute [backface-visibility:hidden] overflow-hidden h-full w-full">
          <img src={image} alt={title} className="object-cover object-top h-full w-full"/>
        </div>
        <div className="absolute [backface-visibility:hidden] flex items-center top-0 w-full h-full bg-gray-500 bg-opacity-25">
          <h4 className="bg-gray-900 bg-opacity-70 text-gray-100 font-bold text-xl lg:text-2xl w-full text-center py-3">
            {title}
          </h4>
        </div>
        <div className="p-5 absolute bg-gray-100 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="h-2/3 overflow-hidden">
              <h4 className="text-center text-xl lg:text-2xl font-bold">{title}</h4>
              <p className="mt-2 md:mt-3 text-center line-clamp">
                {description}
              </p>
          </div>
          <div className="h-1/3 flex justify-around items-center">
            {
              website
                ?<a href={website} target="_blank" rel="noreferrer" 
                className="font-medium hover:scale-105 ease-in-out duration-100">
                  { content.website }
                </a>
                :''
            }
            {
              repository
                ?<a href={repository} target="_blank" rel="noreferrer" 
                className="font-medium hover:scale-105 ease-in-out duration-100">
                  { content.repository }
                </a>
                :''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project