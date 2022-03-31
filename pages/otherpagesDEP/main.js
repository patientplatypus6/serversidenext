
import Link from 'next/link'

export default function MainPage(){
    return(
        <div>
            <Link href="/blog/hello-world">
                <a>Blog Post</a>
            </Link>
        </div>
    )
}