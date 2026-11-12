import ProjectCard from "./ProjectCard";

export default function ProjectList ({ projects, setProjects }) {

    return (
        <>
        <div className="container p-3 my-5">
            <h2>My Projects</h2>
            <div className="row row-cols-1 md:row-cols-3 g-5 my-5">
                {projects.map((project)=>(
                    <div className="col">
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            year={project.year}
                            id= {project.id}
                            projects={projects}
                            setProjects={setProjects}

                        />

                    </div>
                ))}

            </div>
        </div>
            
        </>
    )
}