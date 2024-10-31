import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header className="header">
            <h1>JobPortal</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login" className="link-border">Login</Link>
                <Link to="/register" className="link-border link-colored">Signup</Link>
            </nav>
        </header>
    )
}