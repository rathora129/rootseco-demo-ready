import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function Header() {
  return <>
    <div className="announcement">Corporate gifting, thoughtfully done <span>•</span> Bulk orders welcome</div>
    <header className="header">
      <Link className="logo" href="/" aria-label="RootsEco home"><span className="logo-symbol">r</span><span>roots<span>eco</span><small>CORPORATE GIFTING</small></span></Link>
      <nav className="nav">{site.nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link className="btn btn-primary header-cta" href="/quote">Get a quote <span>↗</span></Link>
    </header>
  </>;
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-grid">
      <div className="footer-about"><Link className="logo logo-footer" href="/"><span className="logo-symbol">r</span><span>roots<span>eco</span><small>CORPORATE GIFTING</small></span></Link><p>{site.tagline} Product-led corporate gifting ideas for teams, clients and business partners.</p><a className="footer-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">Start a WhatsApp enquiry ↗</a></div>
      <div><h4>Explore</h4><Link href="/products">All products</Link><Link href="/categories">Categories</Link><Link href="/solutions">Gifting solutions</Link><Link href="/blog">Ideas & guides</Link></div>
      <div><h4>Company</h4><Link href="/about">About RootsEco</Link><Link href="/contact">Contact us</Link><Link href="/quote">Request a quote</Link></div>
      <div><h4>Let’s talk gifting</h4><p>Tell us your occasion, quantity and budget. We’ll help you start the conversation.</p><Link className="footer-outline" href="/quote">Share your brief ↗</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} RootsEco LLP. All rights reserved.</span><span>Product availability and customisation are subject to confirmation.</span></div>
  </footer>;
}

export function PageHero({ eyebrow, title, emphasis, description, image }) {
  return <section className="page-hero">
    <div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title} <em>{emphasis}</em></h1><p>{description}</p></div>
    {image && <div className="page-hero-image" style={{backgroundImage:`url(${image})`}} />}
  </section>;
}

export function Breadcrumbs({ items = [] }) {
  return <div className="breadcrumbs"><Link href="/">Home</Link>{items.map((item, i) => <span key={i}><b> / </b>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</div>;
}

export function SectionHeading({ eyebrow, title, emphasis, description, link, linkText = "View all ↗" }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title} <em>{emphasis}</em></h2>{description && <p>{description}</p>}</div>{link && <Link className="text-link" href={link}>{linkText}</Link>}</div>;
}
