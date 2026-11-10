import Logo from "../assets/Logo.png"

export default function Navbar () {
    return (
        <>
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Po" width="30" height="24" className="d-inline-block align-text-top"/>
                    Portfli
                </a>
                </div>
            </nav>
        </>
    )
}