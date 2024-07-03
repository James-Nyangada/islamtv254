"use client"
import { Provider } from "react-redux"
import "../styles/index.scss"
import store from "@/redux/store"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="Islam tv-254 is an online platform that will help you enrich your  islamic knowledge " />
        <meta name="google-site-verification" content="gkN4sszP7m5KXmTXKQa1cWFio7mibvhnizutWiWxNRI" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,500,600,700i&display=swap" />

        
      </head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-46XEFY1BGB"></script>
      <script>
        {`
          window.dataLayer =  window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-46XEFY1BGB');
        `}
      </script>
      
      <body suppressHydrationWarning={true} className="sc5">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
