import { useState } from "react"

export default function ProjectForm({setProjects}) {

    const [formData, setFormData] = useState({
        "name": "",
        "image": "",
        "description": "",
        "year": ""
    })
    const [error, setError] = useState("")
    function handleFormChange(event) { 
        setFormData ((prevForm)=> ({
            ...prevForm,
            [event.target.name]: event.target.value
        }))

        // console.log(formData)

        
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(formData)
        
        
        if (formData.image && !formData.image.startsWith("http://") && !formData.image.startsWith("https://") || !formData.image.startsWith("https://")) {
            setError("Please enter a valid imageURL")
            return;
        } 
        if (!formData.name.trim() || !formData.description.trim()) {
            setError("Please fill the name and description")
            return;
        } else {
            setError("")
        }

        setProjects((prevProjects)=> [...prevProjects, formData])

       
    }

   

    return (
        <>
       
        <form onSubmit={handleFormSubmit} className="container border border-keyline rounded-9 p-3 my-5 bg-white">
            <h3 className="p-3">Add your project</h3>
            <div className="m-5">
                <label htmlFor="name" className="form-label">Project Name</label>
                <input onChange={handleFormChange} name="name" value={formData.name} className="form-control" type="text" id="name" placeholder="Project name" required/>
            </div>
            <div className="m-5">
                <label htmlFor="image" className="form-label">Image Url</label>
                <input onChange={handleFormChange} name="image" value={formData.image} className="form-control" type="text" id="image" placeholder="e.g https//.." required/>
            </div>
            <div className="m-5">
                <label htmlFor="description" className="form-label">Project Description</label>
                <input onChange={handleFormChange} name="description" value={formData.description} className="form-control" type="text" id="description" placeholder="Project description" required/>
            </div>
            <div className="m-5">
                <label htmlFor="year" className="form-label">Latest update</label>
                <input onChange={handleFormChange} name="year" value={formData.year} className="form-control" type="number" id="year" placeholder="e.g 2003" required/>
            </div>
            <button className="btn btn-outline theme-secondary mx-5" type="submit">Add Project</button>
            <p>{error}</p>
        </form>
        </>
    )
}