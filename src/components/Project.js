const Project = ({project}) => {
  const { title, description, image, website, repository } = project
  return (
    <div className="group w-[30rem] h-[15rem] [perspective:2000px] mb-5 mx-2">
      <div className="w-full h-full relative shadow-xl transition-transform ease-in-out duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <img src={image} alt={title} className="absolute [backface-visibility:hidden] h-full object-cover"/>
        <div className="p-5 absolute bg-gray-100 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="h-4/5 overflow-hidden">
            <h4 className="text-center text-2xl font-bold">{title}</h4>
              <p className="mt-2 md:mt-3 text-center">
              {description}
              </p>
          </div>
          <div className="h-1/5 flex justify-around items-center">
            <a href={website} target="_blank" rel="noreferrer" className="font-medium hover:scale-105 ease-in-out duration-100">SITIO WEB</a>
            {
            repository
              ?<a href={repository} target="_blank" rel="noreferrer" className="font-medium hover:scale-105 ease-in-out duration-100">REPOSITORIO</a>
              :''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project