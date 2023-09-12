import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crud R&D',
  description: 'Crud of Restaurants and Dishes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"max-w-3xl mx-auto p-4"}>
            <div className={"mt-8"}>
              <AuthProvider>{children}</AuthProvider>
              </div>
        </div>
      </body>
    </html>
  )
}
