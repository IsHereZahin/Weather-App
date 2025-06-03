import { useState } from 'react';
import logoImg from '../../assets/img/logo.svg';
import Favorite from '../ui/Favorite';
import Search from '../ui/Search';
import FavoriteListModal from '../ui/FavoriteListModal';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <a href="./index.html">
                    <img className="h-9" src={logoImg} alt="Weather App" />
                </a>

                <div className="flex items-center gap-4 relative">
                    <Search />
                    <Favorite toggleModal={toggleModal} />
                    {isOpen && <FavoriteListModal />}
                </div>
            </nav>
        </header>
    );
}