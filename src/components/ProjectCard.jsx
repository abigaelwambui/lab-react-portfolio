export default function ProjectCard({name, image, description, year}) {



    return(
        
        <>
            <div className="card h-100 p-0 bg-white">
                <img src={image} className="card-img-start" alt={name}/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="fg-2">Last updated {year}</small></p>
                    <button className="btn btn-sm btn-outline theme-danger">Remove Project</button>
                </div>
                
            </div>
        </>
    )
}