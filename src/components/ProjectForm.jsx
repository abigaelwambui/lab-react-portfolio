import { useState } from "react"

export default function ProjectForm({setProjects}) {

    const [formData, setFormData] = useState({
        "name": "",
        "image": "",
        "description": "",
        "year": ""
    })

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
        setProjects((prevProjects)=> [...prevProjects, formData])
    }

    return (
        <>
        <form onSubmit={handleFormSubmit} className="container border border-keyline rounded-9 p-3 my-5">
            <div className="m-5">
                <label htmlFor="name" className="form-label">Project Name</label>
                <input onChange={handleFormChange} name="name" value={formData.name} className="form-control" type="text" id="name" placeholder="Project name"/>
            </div>
            <div className="m-5">
                <label htmlFor="image" className="form-label">Image Url</label>
                <input onChange={handleFormChange} name="image" value={formData.image} className="form-control" type="text" id="image" placeholder="e.g https//.."/>
            </div>
            <div className="m-5">
                <label htmlFor="description" className="form-label">Project Description</label>
                <input onChange={handleFormChange} name="description" value={formData.description} className="form-control" type="text" id="description" placeholder="Project description"/>
            </div>
            <div className="m-5">
                <label htmlFor="year" className="form-label">Latest update</label>
                <input onChange={handleFormChange} name="year" value={formData.year} className="form-control" type="text" id="year" placeholder="e.g 2003"/>
            </div>
            <button type="submit">Add Project</button>
        </form>
        </>
    )
}