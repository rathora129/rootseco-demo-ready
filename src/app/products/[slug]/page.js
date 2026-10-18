import Link from "next/link";
import { notFound } from "next/navigation";
import { products, categories } from "@/data/catalog";
import { Breadcrumbs, SectionHeading } from "@/components/Site";
import { ProductGrid, QuoteBanner } from "@/components/Cards";
import { site, whatsappUrl } from "@/lib/site";

export function generateStaticParams() { return products.map(p=>({slug:p.slug})); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = products.find(item=>item.slug===slug);
  if (!p) return { title:"Product not found" };
  return { title:p.name, description:p.description, openGraph:{title:`${p.name} | RootsEco`,description:p.description,images:[p.image]} };
}
export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find(p=>p.slug===slug);
  if (!product) notFound();
  const category = categories.find(c=>c.slug===product.category);
  const related = products.filter(p=>p.category===product.category && p.slug!==product.slug).concat(products.filter(p=>p.category!==product.category)).slice(0,4);
  const message = `Hi RootsEco, please share details and bulk pricing for ${product.name}.`;
  return <main><div className="page-wrap"><Breadcrumbs items={[{label:"Products",href:"/products"},{label:category?.name||"Collection",href:`/categories/${product.category}`},{label:product.name}]}/><section className="product-detail"><div className="detail-image"><img src={product.image} alt={product.name}/>{product.tag&&<span className="tag">{product.tag}</span>}</div><div className="detail-copy"><span className="eyebrow">{category?.name} / {product.subcategory}</span><h1>{product.name}</h1><p className="detail-intro">{product.description}</p><div className="quote-price">{product.priceLabel}<small>Pricing depends on selection, branding and order quantity.</small></div><div className="detail-actions"><Link className="btn btn-primary" href={`/quote?product=${product.slug}`}>Request bulk quote ↗</Link><a className="btn btn-outline" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Ask on WhatsApp</a></div><div className="detail-facts"><div><small>Minimum order</small><b>{product.minimumOrder}</b></div><div><small>Lead time</small><b>{product.leadTime}</b></div></div><h3>Product highlights</h3><ul className="check-list">{product.features.map(f=><li key={f}>{f}</li>)}</ul><p className="small-note">Final specifications, availability, branding options and delivery timelines must be confirmed before order.</p></div></section><section className="detail-description"><div><span className="eyebrow">ABOUT THIS GIFT IDEA</span><h2>Make it personal.<br/><em>Make it yours.</em></h2></div><p>{product.description} Share your company requirements, quantity, target delivery date and branding preferences. RootsEco can then confirm suitable options and prepare a quotation based on the actual product brief.</p></section><section className="section-inner"><SectionHeading eyebrow="KEEP EXPLORING" title="You may also" emphasis="like these." link="/products"/><ProductGrid items={related}/></section></div><QuoteBanner/></main>;
}
