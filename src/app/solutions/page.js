import Link from "next/link";
import { solutions } from "@/data/catalog";
import { Breadcrumbs, PageHero } from "@/components/Site";
import { QuoteBanner } from "@/components/Cards";

export const metadata={title:"Corporate Gifting Solutions",description:"Corporate gifting solutions for employee onboarding, festive gifting, client appreciation and branded merchandise."};
export default function SolutionsPage(){
 return <main><PageHero eyebrow="GIFTING SOLUTIONS" title="Made for your" emphasis="business moments." description="Choose a starting point for your gifting brief. We'll help you explore suitable products, quantities, branding and delivery requirements." image="/images/client/welcome-kit.jpg"/><div className="page-wrap"><Breadcrumbs items={[{label:"Solutions"}]}/><div className="solution-detail-list">{solutions.map((s,i)=><article className="solution-detail" id={s.slug} key={s.slug}><div className="solution-detail-image"><img src={s.image} alt={s.title}/></div><div className="solution-detail-copy"><span className="eyebrow">SOLUTION 0{i+1}</span><h2>{s.title}</h2><p>{s.intro}</p><ul className="check-list">{s.points.map(p=><li key={p}>{p}</li>)}</ul><Link className="btn btn-primary" href={`/quote?occasion=${encodeURIComponent(s.title)}`}>Plan this solution ↗</Link></div></article>)}</div></div><QuoteBanner/></main>
}
