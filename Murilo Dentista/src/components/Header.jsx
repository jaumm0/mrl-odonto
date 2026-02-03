import React, { useState }  from "react";
import { MessageCircle, Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-200 shadow-md">
      <div className="flex items-center justify-between py-3 lg:py-4 md:py-4 sm:py-3 lg:px-10 md:px-4 sm:px-4 px-4">
        <h1 className="font-cormorant text-2xl lg:text-3xl md:text-2xl sm:text-xl">
          Odonto Murilo
        </h1>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex font-inter text-Headertext font-medium gap-6 items-center">
            <li>
              <a href="#inicio" className="hover:text-blue-600">
                Inicio
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-blue-600">
                Serviços
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-blue-600">
                Sobre
              </a>
            </li>
          </ul>
          <button className="flex gap-2 font-medium rounded-xl px-3 py-2 justify-center cursor-pointer bg-bgwhats text-white items-center">
            <MessageCircle />
            Agendar Consulta
          </button>
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="flex items-center justify-center md:hidden p-2 rounded-lg hover:bg-gray-300 transition-colors"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-200 border-t border-gray-300">
          <nav className="flex flex-col gap-3">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="font-inter text-Headertext font-medium hover:text-blue-600"
            >
              Inicio
            </a>
            <a
              href="#Services"
              onClick={closeMenu}
              className="font-inter text-Headertext font-medium hover:text-blue-600"
            >
              Serviços
            </a>
            <a
              href="#About"
              onClick={closeMenu}
              className="font-inter text-Headertext font-medium hover:text-blue-600"
            >
              Sobre
            </a>
            <button
              onClick={closeMenu}
              className="mt-2 flex gap-2 font-medium rounded-xl px-3 py-2 justify-center cursor-pointer bg-bgwhats text-white items-center"
            >
              <MessageCircle />
              Agendar Consulta
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;