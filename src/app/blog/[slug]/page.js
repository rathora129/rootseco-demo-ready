import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/catalog";
import { Breadcrumbs } from "@/components/Site";
import { QuoteBanner } from "@/components/Cards";

export function generateStaticParams(){return blogPosts.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}){const {slug}=await params;const p=blogPosts.find(x=>x.slug===slug);return p?{title:p.title,description:p.excerpt}:{title:"Article not found"};}
export default async function BlogDetailPage({params}){
 const {slug}=await params;const post=blogPosts.find(p=>p.slug===slug);if(!post)notFound();
 return <main><div className="page-wrap article-wrap"><Breadcrumbs items={[{label:"Blog",href:"/blog"},{label:post.title}]}/><article className="article"><span className="eyebrow">{post.category} · {post.date}</span><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p><img className="article-cover" src={post.image} alt={post.title}/><div className="article-content">{post.content.map((paragraph,i)=><p key={i}>{paragraph}</p>)}</div><div className="article-end"><Link className="text-link" href="/blog">← Back to all guides</Link><Link className="btn btn-primary" href="/quote">Plan your gifting ↗</Link></div></article></div><QuoteBanner/></main>
}
