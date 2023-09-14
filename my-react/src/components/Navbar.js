import logo from '../images/Group.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="nav">
        
        <img className="logo" src={logo} />
        <h3 className="title">ReactFacts</h3>

        <h4 className="extra-title">React Course - Project 1</h4>
        </nav>
    )
}
