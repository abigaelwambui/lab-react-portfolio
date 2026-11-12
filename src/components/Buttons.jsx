
export default function Buttons({isFormOpen, setIsFormOpen, isAboutMeOpen, setIsAboutMeOpen}){

    function openForm () {
        setIsFormOpen(!isFormOpen)
        setIsAboutMeOpen(false)
    }

    function openAboutMe () {
        setIsAboutMeOpen(!isAboutMeOpen)
        setIsFormOpen(false)
    }

    return(

        <>
            <div>
                <button onClick={openAboutMe} type="button" className="btn-outline theme-secondary m-2">About Me</button>
                <button onClick={openForm} type="button" className="btn-outline theme-secondary m-2">Add Project</button>
            </div>  
        </>
    
    )
}