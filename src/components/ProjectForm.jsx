import { useState } from "react"

export default function ProjectForm() {

    const [formData, setFormData] = useState({
        "name": "",
        "image": "",
        "description": "",
        "year": ""
    })

    function handleChange(event) {
        setFormData ((prevForm)=> ({
            ...prevForm,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <>
        <form className="container border border-keyline rounded-9 p-3 my-5">
            <div className="m-5">
                <label for="name" class="form-label">Project Name</label>
                <input name="name" value={formData.name} class="form-control" type="text" id="name" placeholder="Project name"/>
            </div>
            <div className="m-5">
                <label for="image" class="form-label">Image Url</label>
                <input name="image" value={formData.image} class="form-control" type="text" id="image" placeholder="e.g https//.."/>
            </div>
            <div className="m-5">
                <label for="description" class="form-label">Project Description</label>
                <input name="description" value={formData.description} class="form-control" type="text" id="description" placeholder="Project description"/>
            </div>
            <div className="m-5">
                <label for="year" class="form-label">Latest update</label>
                <input name="year" value={formData.year} class="form-control" type="text" id="year" placeholder="e.g 2003"/>
            </div>
        </form>
        </>
    )
}