import Link from "next/link";
import { PageHero, Breadcrumbs } from "@/components/Site";
import { EnquiryForm } from "@/components/Forms";
import { site, whatsappUrl } from "@/lib/site";

export const metadata={title:"Contact RootsEco",description:"Contact RootsEco about corporate gifting, bulk orders and custom merchandise."};
export default function ContactPage(){
 return <main><PageHero eyebrow="CONTACT ROOTSECO" title="Let’s talk about" emphasis="your gifting needs." description="Have a question, a product idea or a bulk gifting requirement? Start a conversation with our team." image="/images/client/premium-wooden-gift-set.jpg"/><div className="page-wrap"><Breadcrumbs items={[{label:"Contact"}]}/><section className="contact-layout"><div className="contact-cards"><article><span>✉</span><h3>Email</h3><p>For gifting enquiries and briefs</p><a href={`mailto:${site.email}`}>{site.email}</a><small>Confirm this address before launch.</small></article><article><span>☏</span><h3>WhatsApp</h3><p>Start a quick conversation</p><a href={whatsappUrl()} target="_blank" rel="noreferrer">Message RootsEco ↗</a></article><article><span>⌖</span><h3>Business location</h3><p>{site.location}</p><small>Add verified office address and operating hours here.</small></article><div className="contact-note"><b>For a faster quote</b><p>Share product type, approximate quantity, budget per gift and target delivery date.</p><Link className="text-link" href="/quote">Open quote form ↗</Link></div></div><div className="contact-form-wrap"><span className="eyebrow">SEND AN ENQUIRY</span><h2>How can we <em>help?</em></h2><EnquiryForm compact/></div></section></div></main>
}
