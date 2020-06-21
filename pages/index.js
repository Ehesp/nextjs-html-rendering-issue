import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: '<p>Hello World!!!</p>'}} />
      <br/>
      <Link href="/page-2">
        <a>Go to page 2...</a>
      </Link>
    </div>
  )
}
