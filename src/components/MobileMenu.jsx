/* eslint-disable react/prop-types */
export const MobileMenu = ({ closeMenu }) => {
  return (
    <nav className="flex flex-col items-start gap-4 p-6 text-cinza-escuro bg-white rounded-l-md mt-[-5px]">
      <a href="#" className="text-lg font-medium hover:text-azul2" onClick={closeMenu}>
        Início
      </a>
      <a href="#" className="text-lg font-medium hover:text-azul2" onClick={closeMenu}>
        Sobre Nós
      </a>
      <a href="#" className="text-lg font-medium hover:text-azul2" onClick={closeMenu}>
        Recursos
      </a>
    </nav>
  );
};
