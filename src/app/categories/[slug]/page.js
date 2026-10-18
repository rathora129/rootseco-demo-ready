import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, products } from "@/data/catalog";
import { Breadcrumbs, PageHero, SectionHeading } from "@/components/Site";
import { ProductGrid, QuoteBanner } from "@/components/Cards";

export function generateStaticParams(){return categories.map(c=>({slug:c.slug}));}
export async function generateMetadata({params}){const {slug}=await params;const c=categories.find(x=>x.slug===slug);return c?{title:c.name,description:c.short}:{title:"Category not found"};}
export default async function CategoryDetailPage({params}){
  const {slug}=await params;const category=categories.find(c=>c.slug===slug);if(!category)notFound();
  const items=products.filter(p=>p.category===slug);
  return <main><PageHero eyebrow="ROOTSECO COLLECTION" title={category.name} emphasis="for business." description={category.short} image={category.image}/><div className="page-wrap"><Breadcrumbs items={[{label:"Categories",href:"/categories"},{label:category.name}]}/><section className="subcategory-section"><span className="eyebrow">EXPLORE SUBCATEGORIES</span><h2>Browse by <em>product type</em></h2><div className="subcategory-list">{category.subcategories.map((sub,i)=><Link key={sub} href={`/categories/${category.slug}/${sub.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}><span>0{i+1}</span><b>{sub}</b><span>↗</span></Link>)}</div><p className="small-note">Browse a subcategory to see the matching product references. Product specifications and availability are confirmed on enquiry.</p></section><section className="section-inner"><SectionHeading eyebrow="PRODUCT IDEAS" title="Explore this" emphasis="collection."/><ProductGrid items={items}/>{!items.length&&<p className="empty-state">We are building this collection. Request a quote and tell us what you need.</p>}</section><div className="category-other"><h3>Explore other categories</h3><div>{categories.filter(c=>c.slug!==slug).slice(0,4).map(c=><Link key={c.slug} href={`/categories/${c.slug}`}>{c.name} ↗</Link>)}</div></div></div><QuoteBanner/></main>;
}
