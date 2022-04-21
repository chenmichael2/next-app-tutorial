// our-domain.com/news
import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><a href="/news/first-list-item">First List Item</a></li>
                <li>Something else</li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;