import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Ketu Design Studio | Premium Office Interiors Gurugram',
  description: 'Premium Office Interior Design Studio in Gurugram. 500+ projects, 120+ elite clients. Transform your workspace with Ketu Design Studio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','1476332063114449');fbq('track','PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1476332063114449&ev=PageView&noscript=1" alt="" />
        </noscript>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8673T9TB7S" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8673T9TB7S');
          `}
        </Script>

        <Navbar />
        <a href="tel:+918398801801" className="floating-consultation-btn">Book a Consultation</a>
        {children}
        <Footer />
      </body>
    </html>
  )
}
