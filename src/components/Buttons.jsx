
export default function Buttons({isFormOpen, setIsFormOpen}){

    function openForm () {
        setIsFormOpen(!isFormOpen)
    }

    return(

        <>
            <div>
                <button type="button" className="btn-outline theme-secondary m-2">About Me</button>
                <button type="button" className="btn-outline theme-secondary m-2">Overview</button>
                <button onClick={openForm} type="button" className="btn-outline theme-secondary m-2">Add Project</button>
            </div>  
        </>
    
    )
}