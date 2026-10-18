import { Suspense } from "react";
import { PageHero, Breadcrumbs } from "@/components/Site";
import { EnquiryForm } from "@/components/Forms";

export const metadata={title:"Request a Corporate Gifting Quote",description:"Share your corporate gifting requirements with RootsEco and request a bulk gifting quotation."};
export default function QuotePage(){
 return <main><PageHero eyebrow="START A CONVERSATION" title="Let's plan your" emphasis="next gifting project." description="Share a few details about your occasion, quantity and budget. This prototype will prepare your enquiry in WhatsApp." image="/images/client/welcome-kit.jpg"/><div className="page-wrap"><Breadcrumbs items={[{label:"Request a quote"}]}/><section className="quote-page-layout"><div className="quote-side"><span className="eyebrow">A USEFUL BRIEF INCLUDES</span><h2>Small details help us <em>get started.</em></h2><ul className="check-list"><li>Who are the gifts for?</li><li>What occasion are you planning?</li><li>How many recipients are you considering?</li><li>Do you have a budget per gift?</li><li>Do you need branded products or packaging?</li><li>When and where do you need delivery?</li></ul><div className="quote-side-note"><b>Not sure yet?</b><p>That’s fine. Send the details you have and use the conversation to narrow down options.</p></div></div><div><h2 className="form-title">Tell us about your requirement</h2><EnquiryForm/></div></section></div></main>
}
