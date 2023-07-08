import React from 'react'

function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:'/assets/disney.png',
            video:'/assets/Videos/disney.mp4'
        },
        {
            id:2,
            image:'/assets/pixar.png',
            video:'/assets/Videos/pixar.mp4'
        },
        {
            id:3,
            image:'/assets/marvel.png',
            video:'/assets/Videos/marvel.mp4'
        },
        {
            id:4,
            image:'/assets/starwar.png',
            video:'/assets/Videos/star-wars.mp4'
        },
        {
            id:5,
            image:'/assets/nationalG.png',
            video:'/assets/Videos/national-geographic.mp4'
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' />
               
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse