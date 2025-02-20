import React from "react";

const Header = () => {
  return (
    <div className="flex w-full px-10 h-[90px] relative border-b border-neutral-800 justify-between items-center">
      <h1 className="text-3xl font-bold">
        Publica <span className="text-sm">Docs</span>
      </h1>
      <div className="flex items-center gap-4">
        <input 
          type="text" 
          className="bg-neutral-800 rounded-md py-2 px-4" 
          placeholder="Buscar documentación..." 
        />
        <div className="flex items-center gap-4">
          <button>Iniciar sesión</button>
          <button>Registrarse</button>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 bg-neutral-900/80 backdrop-blur-lg -z-10"/>
    </div>
  );
};

export default Header;
