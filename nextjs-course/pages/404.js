// for any routes that dont exist
import Link from "next/link"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1); go back and +1 goes foward
            router.push('/'); //redirect them to home page
        }, 3000)
    }, []);

    return (
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>That page cannot be found.</h2>
            <Link href="/"><a><p>Go back to home</p></a></Link>
        </div>
    )
}

export default NotFound;