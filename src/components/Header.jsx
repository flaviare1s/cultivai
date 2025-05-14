import { slide as Menu } from 'react-burger-menu';
import { DesktopMenu } from './DesktopMenu';
import logo from '../assets/logo-cultivai.png';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo CultivAI" className="h-10 w-auto" />
          <h1 className="text-verde-primario text-xl font-bold">
            Cultiv<span className="text-azul-primario">AI</span>
          </h1>
        </div>

        <div className="hidden md:block">
          <DesktopMenu />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-verde-primario text-3xl focus:outline-none"
            aria-label="Abrir menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <Menu
        right
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        customBurgerIcon={false}
        customCrossIcon={false}
        width={'260px'}
        overlayClassName="custom-overlay"
      >
        <MobileMenu closeMenu={closeMenu} />
      </Menu>
    </>
  );
};

