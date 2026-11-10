export default function Navbar () {
    return (
        <>
             <nav className="navbar md:navbar-expand bg-1 fg-2 fixed-top p-0 ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={assets} alt="Framework Logo" className="d-inline-block align-text-top" width="160"/>
                </a>
                
                <button 
                    className="btn btn-outline-dark btn-sm ms-2 fw-bold" 
                    onClick={onToggleAdmin}
                    type="button"
                >
                Admin Panel
                </button>

                <dialog className="drawer drawer-end" tabindex="-1" id="navbarText" aria-labelledby="navbarTextLabel">
                    <div className="drawer-header">
                        <h5 className="drawer-title" id="navbarTextLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                    </div>
                    <div className="drawer-body">
                        <ul className="navbar-nav me-auto mb-2 md:mb-0">
                            <li className="nav-item"><a className="nav-link active" href="#">Desktop</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Laptop 12</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Laptop 13</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Laptop 16</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Shop all</a></li>
                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 md:mb-0">
                                <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">For Business</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                            </ul>
                        </span>
                    </div>
                </dialog>
            </div>
        </nav>
        </>
    )
}