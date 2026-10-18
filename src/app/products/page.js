"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { products, categories } from "@/data/catalog";
import { ProductGrid, QuoteBanner } from "@/components/Cards";
import { PageHero, Breadcrumbs } from "@/components/Site";

export default function ProductsPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    let list = products.filter(p => (category === "all" || p.category === category) && `${p.name} ${p.description} ${p.subcategory} ${p.tag}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "name") list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
    if (sort === "featured") list = [...list].sort((a,b)=>Number(b.featured)-Number(a.featured));
    return list;
  }, [category, query, sort]);
  return <main><PageHero eyebrow="ROOTSECO PRODUCT CATALOGUE" title="Corporate gifts," emphasis="curated for you." description="Browse product references for teams, clients, events and festive occasions. Share your brief for current availability, specifications and bulk pricing." image="/images/client/welcome-kit.jpg"/><div className="page-wrap"><Breadcrumbs items={[{label:"Products"}]}/><div className="catalog-toolbar"><div><span className="eyebrow">PRODUCT CATALOGUE</span><h2>Explore gift ideas <em>({filtered.length})</em></h2></div><input aria-label="Search products" className="search-box" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..."/><select aria-label="Sort products" className="sort-select" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured first</option><option value="name">Name A–Z</option></select></div><div className="catalog-layout"><aside className="filter-panel"><h3>Collections</h3><button className={category==="all"?"filter-active":""} onClick={()=>setCategory("all")}>All products <span>{products.length}</span></button>{categories.map(c=><button key={c.slug} className={category===c.slug?"filter-active":""} onClick={()=>setCategory(c.slug)}>{c.name}<span>{products.filter(p=>p.category===c.slug).length}</span></button>)}<div className="filter-help"><b>Need help selecting gifts?</b><p>Share your occasion, quantity and budget.</p><Link href="/quote">Request a quote ↗</Link></div></aside><div className="catalog-results"><ProductGrid items={filtered}/></div></div></div><QuoteBanner/></main>;
}
