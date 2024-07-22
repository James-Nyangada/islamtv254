"use client"
import { Provider } from "react-redux"
import "../styles/index.scss"
import store from "@/redux/store"
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <body suppressHydrationWarning={true} className="sc5">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
      <GoogleAnalytics gaId="G-46XEFY1BGB" />
    </html>
  )
}