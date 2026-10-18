export const site = {
  name: "RootsEco",
  legalName: "RootsEco LLP",
  tagline: "Meaningful gifts. Lasting relationships.",
  description: "Corporate gifting, employee welcome kits, custom merchandise and festive gifting solutions for businesses.",
  domain: "https://www.rootseco.com",
  whatsapp: "919999999999", // Replace with verified business number before launch
  email: "hello@rootseco.com", // Verify before launch
  phone: "+91 99990 39303", // Verify before launch
  location: "India",
  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Solutions", href: "/solutions" },
    { label: "About us", href: "/about" },
    { label: "Blog", href: "/blog" }
  ]
};

export function whatsappUrl(message = "Hi RootsEco, I would like to enquire about corporate gifting solutions.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
