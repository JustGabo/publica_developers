import React from "react";

const Header = () => {
  return (
    <div className="flex w-full justify-between  items-center">
      <h1 className="text-3xl font-bold">
        Publica <span className="text-sm">Docs</span>
      </h1>
      <div className="flex items-center gap-4">
        <input type="text" className="bg-neutral-800 rounded-md py-2 px-4" placeholder="Search documentation..." />
        <div className="flex items-center gap-4">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
