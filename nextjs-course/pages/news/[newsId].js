// our-domain.com/news/something-important
// [] square brackets allow different values (dynamic pages)

import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId

    return <h1>The Detail Page</h1>
}

export default DetailPage;