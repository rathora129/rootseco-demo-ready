import Link from "next/link";
export default function NotFound(){return <main className="not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>This page took a <em>different route.</em></h1><p>The page may have moved, or the link may be incorrect.</p><Link className="btn btn-primary" href="/">Back to homepage ↗</Link></main>}
