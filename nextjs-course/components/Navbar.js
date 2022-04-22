import Link from 'next/link';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link><a>Home</a></Link>
            <Link><a>About</a></Link>
            <Link><a>NavBar List</a></Link>
        </nav>
    )
}

export default Navbar;