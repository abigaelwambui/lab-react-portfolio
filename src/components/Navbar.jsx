import Logo from "../assets/Logo.png"
import Buttons from "./Buttons"

export default function Navbar ({isFormOpen, setIsFormOpen, isAboutMeOpen, setIsAboutMeOpen}) {
    return (
        <>
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Portfli" width="30" height="24" className="d-inline-block align-text-top"/>
                    Portfli
                </a>
                <Buttons isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} isAboutMeOpen={isAboutMeOpen} setIsAboutMeOpen={setIsAboutMeOpen}/>
                </div>
            </nav>
        </>
    )
}