// for any routes that dont exist
import Link from "next/link"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
    useEffect(() => {
        console.log('use effect ran');
    }, [])
    return (
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>That page cannot be found.</h2>
            <Link href="/"><a><p>Go back to home</p></a></Link>
        </div>
    )
}

export default NotFound;