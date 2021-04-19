import '../styles/navbar.css';

const Navbar = ({children}) => {
    return ( 
        <nav className="nav">
                {children}
        </nav>
    );
}
 
export default Navbar;