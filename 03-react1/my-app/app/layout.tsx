'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import React from "react"
import C_menuComponent from "@/app/componentes/c_menu.component";

const inter = Inter({ subsets: ['latin'] })

//export const metadata = {
//  title: 'Create Next App',
//  description: 'Generated by create next app',
//}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossOrigin="anonymous"></link>

      <C_menuComponent/>
      {/*C_menuComponent></C_menuComponent>*/}
      {children}
      <footer>Footer</footer>
      </body>
    </html>
  )
}