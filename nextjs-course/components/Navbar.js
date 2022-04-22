import Link from 'next/link';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/news"><a>news</a></Link>
            <Link href="/navbar-list"><a>NavBar List</a></Link>
        </nav>
    )
}

export default Navbar;