import Link from "next/link";
import { categories, products, solutions, blogPosts } from "@/data/catalog";
import { whatsappUrl } from "@/lib/site";

export function ProductCard({ product }) {
  const category = categories.find(c => c.slug === product.category);
  return <article className="product-card">
    <Link className="product-photo" href={`/products/${product.slug}`}><img src={product.image} alt={product.name} loading="lazy"/>{product.tag && <span className="tag">{product.tag}</span>}</Link>
    <div className="product-card-body"><span className="mini-label">{category?.name || product.category}</span><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p>{product.description}</p><div className="product-card-bottom"><span>{product.priceLabel}</span><Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>↗</Link></div></div>
  </article>;
}

export function CategoryCard({ category }) {
  return <Link className="category-card" href={`/categories/${category.slug}`}><div className="category-photo"><img src={category.image} alt={category.name} loading="lazy"/><span>↗</span></div><div className="category-card-copy"><h3>{category.name}</h3><p>{category.short}</p><small>{category.subcategories.length} collections</small></div></Link>;
}

export function SolutionCard({ solution }) {
  return <Link className="solution-card" href={`/solutions#${solution.slug}`}><img src={solution.image} alt={solution.title} loading="lazy"/><div><span className="mini-label">GIFTING SOLUTION</span><h3>{solution.title}</h3><p>{solution.intro}</p><b>Explore solution ↗</b></div></Link>;
}

export function BlogCard({ post }) {
  return <article className="blog-card"><Link href={`/blog/${post.slug}`} className="blog-photo"><img src={post.image} alt={post.title} loading="lazy"/></Link><div className="blog-body"><span className="mini-label">{post.category} · {post.date}</span><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read article ↗</Link></div></article>;
}

export function ProductGrid({ items = products }) {
  if (!items.length) return <div className="empty-state">No products found. Try another search or category.</div>;
  return <div className="product-grid">{items.map(product => <ProductCard key={product.id} product={product}/>)}</div>;
}

export function QuoteBanner() {
  return <section className="quote-banner"><div><span className="eyebrow">YOUR NEXT GIFTING PROJECT STARTS HERE</span><h2>Have a brief in mind? <em>Let’s build it together.</em></h2><p>Share the occasion, quantity and budget to start a conversation with RootsEco.</p></div><Link className="btn btn-light" href="/quote">Request a quote ↗</Link></section>;
}

export function WhatsAppButton({ children = "Chat on WhatsApp ↗", className = "btn btn-primary" }) {
  return <a className={className} href={whatsappUrl()} target="_blank" rel="noreferrer">{children}</a>;
}
