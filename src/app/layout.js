import "./globals.css";
import { Header, Footer } from "@/components/Site";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.domain),
  title: { default: "RootsEco | Corporate Gifting & Custom Business Gifts", template: "%s | RootsEco" },
  description: site.description,
  keywords: ["corporate gifts", "bulk corporate gifting", "employee welcome kits", "customized corporate gifts", "festive corporate hampers", "eco-friendly corporate gifts"],
  openGraph: { title: "RootsEco | Corporate Gifting", description: site.description, type: "website", siteName: site.name },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header/>{children}<Footer/></body></html>;
}
