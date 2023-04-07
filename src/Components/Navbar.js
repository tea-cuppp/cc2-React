import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="container ">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">

                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <Link to="/" style={{ textDecoration: "none" }} className="nav-link px-2 link-secondary"><li>Home</li></Link>
                        <Link to="/destination" style={{ textDecoration: "none" }} className="nav-link px-2"> <li>Destination</li></Link>
                        <Link to="/about" style={{ textDecoration: "none" }} className="nav-link px-2"><li>About</li></Link>
                        <Link to="/contact" style={{ textDecoration: "none" }} className="nav-link px-2"><li>Contact</li></Link>
                         <Link to="/day6" style={{ textDecoration: "none" }} className="nav-link px-2"><li>Day 6</li></Link>
                          <Link to="/day7" style={{ textDecoration: "none" }} className="nav-link px-2"><li>Day 7</li></Link>
                            <Link to="/day8" style={{ textDecoration: "none" }} className="nav-link px-2"><li>Day 8</li></Link>
                            <Link to="/singers" style={{ textDecoration: "none" }} className="nav-link px-2"><li>Singers</li></Link>
                            <Link to="/albums" style={{ textDecoration: "none" }} className="nav-link px-2"><li>Albums</li></Link>
                    </ul>

                    <div className="col-md-3 text-end">
                        <Link to="/login" style={{ textDecoration: "none" }}><button type="button" className="btn btn-outline-primary me-2">Register</button></Link>

                    </div>
                </header>
            </div>
        </div>
    )
}
