import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PWA with Next 13",
    description: "PWA application with Next 13",
    generator: "Next.js",
    manifest: "/public/manifest.json",
    keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
    themeColor: "#ffffff", // Set your theme color here
    authors: [
      { name: "Rajesh Prajapati" },
     
    ],
    viewport:
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    icons: [
      { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
      { rel: "icon", url: "icons/icon-128x128.png" },
    ],
  };
  

  interface RootLayoutProps {
    children: React.ReactNode
    params: {
      locale: string;
    };
  }
  
  
  export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  
   
    return (
    
      <html lang={locale}>
      <body>
        
          {children}
        
      </body>
    </html>
     
    )
  }