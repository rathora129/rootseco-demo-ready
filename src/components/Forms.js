"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

export function EnquiryForm({ compact = false }) {
  const [values, setValues] = useState({ name:"", company:"", email:"", phone:"", quantity:"", occasion:"Employee welcome kits", budget:"", message:"" });
  const [status, setStatus] = useState("");
  function update(e) { setValues(prev => ({ ...prev, [e.target.name]: e.target.value })); }
  function submit(e) {
    e.preventDefault();
    const text = [
      `RootsEco enquiry`,
      `Name: ${values.name}`,
      `Company: ${values.company || "Not specified"}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not specified"}`,
      `Occasion: ${values.occasion}`,
      `Quantity: ${values.quantity || "Not specified"}`,
      `Budget: ${values.budget || "Not specified"}`,
      `Brief: ${values.message || "Not specified"}`
    ].join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened with your enquiry details. Send the message there to complete your request.");
  }
  return <form className={`enquiry-form ${compact ? "compact" : ""}`} onSubmit={submit}>
    <div className="form-grid">
      <label>Full name *<input required name="name" value={values.name} onChange={update} placeholder="Your name"/></label>
      <label>Company / organisation<input name="company" value={values.company} onChange={update} placeholder="Company name"/></label>
      <label>Work email *<input required type="email" name="email" value={values.email} onChange={update} placeholder="you@company.com"/></label>
      <label>Phone number<input name="phone" value={values.phone} onChange={update} placeholder="Contact number"/></label>
      <label>What are you planning? *<select required name="occasion" value={values.occasion} onChange={update}><option>Employee welcome kits</option><option>Festive corporate gifting</option><option>Client appreciation</option><option>Events & brand merchandise</option><option>Eco-friendly gifts</option><option>Custom gift boxes</option><option>Other</option></select></label>
      <label>Estimated quantity<select name="quantity" value={values.quantity} onChange={update}><option value="">Select quantity</option><option>25–50</option><option>51–100</option><option>101–250</option><option>251–500</option><option>500+</option><option>Not decided</option></select></label>
      <label className="full-field">Approximate budget per gift<select name="budget" value={values.budget} onChange={update}><option value="">Select budget</option><option>Under ₹500</option><option>₹500–₹1,000</option><option>₹1,000–₹2,500</option><option>₹2,500+</option><option>Need suggestions</option></select></label>
      <label className="full-field">Tell us a little more<textarea name="message" value={values.message} onChange={update} rows="4" placeholder="Occasion, delivery locations, preferred products, branding needs..."/></label>
    </div>
    <button className="btn btn-primary submit-btn" type="submit">Send enquiry on WhatsApp ↗</button>
    {status && <p className="form-status" role="status">{status}</p>}
    <p className="form-privacy">Prototype form: details are sent to WhatsApp and are not stored in a database yet.</p>
  </form>;
}
