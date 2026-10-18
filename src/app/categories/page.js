import { categories } from "@/data/catalog";
import { CategoryCard } from "@/components/Cards";
import { Breadcrumbs, PageHero } from "@/components/Site";
import { QuoteBanner } from "@/components/Cards";

export const metadata = { title:"Corporate Gifting Categories", description:"Explore RootsEco corporate gifting categories, subcategories and product collections." };
export default function CategoriesPage() {
  return <main><PageHero eyebrow="BROWSE BY CATEGORY" title="Find your gifting" emphasis="starting point." description="Explore categories and subcategories to narrow down gift ideas by product type, occasion and business need." image="/images/client/premium-wooden-gift-set.jpg"/><section className="page-wrap"><Breadcrumbs items={[{label:"Categories"}]}/><div className="category-grid category-grid-large">{categories.map(c=><CategoryCard key={c.slug} category={c}/>)}</div></section><QuoteBanner/></main>;
}
