import React, { useState } from 'react';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
            key: 'home', // Agregar la propiedad key para cada elemento del menú
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
            key: 'search', // Agregar la propiedad key para cada elemento del menú
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus,
            key: 'watchlist', // Agregar la propiedad key para cada elemento del menú
        },
        {
            name: 'ORIGINALS',
            icon: HiStar,
            key: 'originals', // Agregar la propiedad key para cada elemento del menú
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle,
            key: 'movies', // Agregar la propiedad key para cada elemento del menú
        },
        {
            name: 'SERIES',
            icon: HiTv,
            key: 'series', // Agregar la propiedad key para cada elemento del menú
        },
    ];

    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex gap-8 items-center">
                <img src="/assets/logo.png" alt="Logo" className="w-[80px] md:w-[115px] object-cover" />
                <div className="hidden md:flex gap-8">
                    {menu.map((item) => (
                        <HeaderItem key={item.key} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className="flex md:hidden gap-5">
                    {menu.map((item, index) => index < 3 && <HeaderItem key={item.key} name={''} Icon={item.icon} />)}
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle && (
                            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                                {menu.map((item, index) => index > 2 && <HeaderItem key={item.key} name={item.name} Icon={item.icon} />)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="User Avatar"
                className="w-[40px] rounded-full"
            />
        </div>
    );
}

export default Header;
