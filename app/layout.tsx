import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CartProvider from './components/Providers'
import ShoppingCartModal from './components/ShoppingCartModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'N14Commerce',
  description: 'An ecommerce app built using NextJs 14 and Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ShoppingCartModal />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
