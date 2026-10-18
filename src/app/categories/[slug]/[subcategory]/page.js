import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, products } from "@/data/catalog";
import { Breadcrumbs, PageHero, SectionHeading } from "@/components/Site";
import { ProductGrid, QuoteBanner } from "@/components/Cards";

export function generateStaticParams() {
  return categories.flatMap(category => category.subcategories.map(subcategory => ({
    slug: category.slug,
    subcategory: subcategory.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  })));
}

export async function generateMetadata({ params }) {
  const { slug, subcategory } = await params;
  const category = categories.find(item => item.slug === slug);
  const label = category?.subcategories.find(item => item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === subcategory);
  return label ? { title: label, description: `${label} in the ${category.name} corporate gifting collection from RootsEco.` } : { title: "Subcategory not found" };
}

export default async function SubcategoryPage({ params }) {
  const { slug, subcategory } = await params;
  const category = categories.find(item => item.slug === slug);
  if (!category) notFound();
  const label = category.subcategories.find(item => item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === subcategory);
  if (!label) notFound();
  const matchingProducts = products.filter(item => item.category === slug && item.subcategory?.toLowerCase() === label.toLowerCase());
  return <main>
    <PageHero eyebrow={category.name.toUpperCase()} title={label} emphasis="collection." description={`Explore ${label.toLowerCase()} ideas for corporate gifting. Share your quantity, budget and branding needs for a tailored quotation.`} image={category.image}/>
    <div className="page-wrap">
      <Breadcrumbs items={[{ label: "Categories", href: "/categories" }, { label: category.name, href: `/categories/${slug}` }, { label }]}/>
      <section className="section-inner">
        <SectionHeading eyebrow="SUBCATEGORY COLLECTION" title="Find the right fit for" emphasis={label.toLowerCase()}/>
        {matchingProducts.length ? <ProductGrid items={matchingProducts}/> : <div className="empty-state">We're preparing this collection. <Link href={`/quote?occasion=${encodeURIComponent(label)}`}>Request a quote ↗</Link> and tell us what you need.</div>}
      </section>
    </div>
    <QuoteBanner/>
  </main>;
}
