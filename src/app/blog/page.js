import { blogPosts } from "@/data/catalog";
import { BlogCard, QuoteBanner } from "@/components/Cards";
import { Breadcrumbs, PageHero } from "@/components/Site";

export const metadata={title:"Corporate Gifting Ideas & Guides",description:"Read practical corporate gifting guides, employee welcome kit ideas and seasonal gifting checklists."};
export default function BlogPage(){return <main><PageHero eyebrow="THE GIFTING DESK" title="Ideas for more" emphasis="thoughtful gifting." description="Planning notes, gifting inspiration and practical checklists for your next business occasion." image="/images/client/welcome-kit.jpg"/><div className="page-wrap"><Breadcrumbs items={[{label:"Blog"}]}/><div className="blog-grid blog-grid-page">{blogPosts.map(p=><BlogCard key={p.slug} post={p}/>)}</div></div><QuoteBanner/></main>}
