//import Image from 'next/image'
'use client'
import GenMovieList from "@/app/components/GenMovieList";
import Header from "@/app/components/Header";
import HeaderItem from "@/app/components/HeaderItem";
import Slider from "@/app/components/Slider";
import ProductionHouse from "@/app/components/ProductionHouse";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenMovieList/>
        <Footer/>
    </>
  )
}
