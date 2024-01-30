import { Link } from "react-router-dom"
import { NAVBAR_LINKS } from "../utility/data"
const Navbar = () => {
  return (
    <section id="nav-bar">
        <nav
            className="navbar navbar-expand-sm navbar-dark bg-dark"
        >
            <div className="container">
                <a className="navbar-brand" href="#">Joyselect</a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    {
                        NAVBAR_LINKS.map(({id,label,path,icon})=>(
                            <li className="nav-item" key={id}>
                                <Link className="nav-link" to={path}><i>{icon}</i>{label}</Link>
                            </li>

                        ))
                    }
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
    </section>
  )
}

export default Navbar