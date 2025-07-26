// import React from "react"
// import { Metadata } from "next"
// import { Barlow } from "next/font/google"
// import "./globals.css"


// const barlow = Barlow({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   variable: "--font-barlow",
// })

// export const metadata = {
//   title: "NextGen Technologies",
//   description: "Simplifying Operations, Enabling Growth, and Enhancing Productivity Through Expert Virtual Assistance.",
//   icons: {
//     icon: "/TabLogo/logo.JPG", // or "/favicon.png" depending on your file
//   },
// }

// export default function RootLayout({
//   children,
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${barlow.variable} font-sans`} suppressHydrationWarning={true}>
//           <div className="relative overflow-hidden">
//             <main className="min-h-screen">{children}</main>
//           </div>
//       </body>
//     </html>
//   )
// }


// import './globals.css'
import React from "react";
import Script from "next/script"; // ✅ Important for script
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "NextGen Technologies",
  description:
    "Simplifying Operations, Enabling Growth, and Enhancing Productivity Through Expert Virtual Assistance.",
  icons: {
    icon: "/TabLogo/logo.JPG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlow.variable} font-sans`} suppressHydrationWarning={true}>
        <div className="relative overflow-hidden">
          <main className="min-h-screen">{children}</main>
        </div>

        {/* ✅ Chatbase Script inserted inside body (NOT in <head>) */}
        <Script id="chatbase-script" strategy="afterInteractive">
          {`
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="y-Co25z8ZyJT-iifRwrUS";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
          `}
        </Script>
      </body>
    </html>
  );
}
