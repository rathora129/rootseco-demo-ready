import { categories, products, blogPosts } from "@/data/catalog";
import { site } from "@/lib/site";
export default function sitemap(){
 const base=site.domain;
 return [
  {url:base,lastModified:new Date(),changeFrequency:"weekly",priority:1},
  ...["products","categories","about","solutions","contact","quote","blog"].map(p=>({url:`${base}/${p}`,lastModified:new Date(),changeFrequency:"weekly",priority:0.8})),
  ...categories.map(c=>({url:`${base}/categories/${c.slug}`,lastModified:new Date(),changeFrequency:"weekly",priority:0.7})),
  ...categories.flatMap(c=>c.subcategories.map(sub=>({url:`${base}/categories/${c.slug}/${sub.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}`,lastModified:new Date(),changeFrequency:"weekly",priority:0.6}))),
  ...products.map(p=>({url:`${base}/products/${p.slug}`,lastModified:new Date(),changeFrequency:"weekly",priority:0.7})),
  ...blogPosts.map(p=>({url:`${base}/blog/${p.slug}`,lastModified:new Date(),changeFrequency:"monthly",priority:0.5}))
 ];
}
