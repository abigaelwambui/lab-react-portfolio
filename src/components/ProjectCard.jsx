export default function ProjectCard({name, image, description, year, id, removeProject, projects, setProjects}) {

    function removeProject (id) {
        const remainingProjects = projects.filter((project)=> project.id !== id)
        setProjects([...remainingProjects])
        console.log(remainingProjects)
    }


    return(
        
        <>
            <div className="card h-100 p-0 bg-white">
                <img src={image} className="card-img-start" alt={name}/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="fg-2">Last updated {year}</small></p>
                    <button className="btn btn-sm btn-outline theme-danger" commandfor="invokerDialog" command="show-modal">Remove Project</button>
                    <dialog class="dialog" id="invokerDialog">
                        <div class="dialog-header">
                            <h1 class="dialog-title">Remove project</h1>
                            <button type="button" class="btn-close" commandfor="invokerDialog" command="close" aria-label="Close"></button>
                        </div>
                        <div class="dialog-body">
                            <p>This will permanently delete your project. Are you sure you want to remove?</p>
                        </div>
                        <div class="dialog-footer">
                            <button type="button" class="btn-outline theme-secondary" commandfor="invokerDialog" command="close">Close</button>
                            <button onClick={()=>removeProject(id)} type="button" class="btn-outline theme-danger">Yes, remove</button>
                        </div>
                    </dialog>
                </div>
                
            </div>
        </>
    )
}