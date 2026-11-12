import placeholder from '../assets/placeholder.jpg'

export default function AboutMe() {
    return (
        <>

                <div className="card mb-3 d-flex flex-row bg-white" style={{ maxWidth: "100%" } }>
                    <img
                        src="https://images.unsplash.com/photo-1527698266440-12104e498b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                        className="img-fluid rounded-start"
                        alt="About me"
                        style={{ width: "35%", objectFit: "cover" }}
                    />

                    <div className="card-body">
                        <h1 className="card-title">More about me...</h1>

                        <p className="card-text">
                            Hello! I'm a passionate and curious individual who enjoys exploring ideas, solving problems, and creating meaningful things. I believe in continuous learning and finding creative ways to turn challenges into opportunities.
                            I'm always eager to develop my skills, explore new technologies, collaborate with others, and work on projects that make a difference. This portfolio is a collection of my journey, experiences, and the things I've created along the way.
                            I'm excited about what lies ahead and always open to new opportunities!
                        </p>
                        <a class="btn-outline theme-success" href="#footer" role="button">Contact me</a>
                    </div>
                </div>
            


        </>
    )
}