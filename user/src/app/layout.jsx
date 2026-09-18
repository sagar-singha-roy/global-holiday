import "../style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalShell from "@/components/GlobalShell";

export const metadata = {
  title:
    "Global Holidays Tour & Travels | Tripura Tourism Empanelled Premier Agency",
  description:
    "Experience extraordinary journeys across Northeast India, sacred Himalayan trails, pristine Andaman beaches, and international havens with Agartala’s premier empanelled travel designers.",
  keywords:
    "Global Holidays, Tripura Tourism, Tour Operator Agartala, Meghalaya Tour Package, Sikkim Darjeeling Tour, Kashmir Package, Andaman Luxury Holiday, Travel Agency Agartala",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    apple: "/images/favicon-192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('gh_theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <GlobalShell />
      </body>
    </html>
  );
}
