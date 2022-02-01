import { signOut } from "next-auth/client";
import { useState } from "react";
import Hamburguer from "./hamburguer";
import Link from "next/link";

export default function HeaderAdmin() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="text-xs bg-gray-900 bg-opacity-80 text-white font-normal fixed flex justify-between z-20 w-full">
        <div className=" hover:bg-gray-700 bg-gray-800 cursor-pointer">
        <Hamburguer toggle={toggle} setToggle={setToggle} />
          <div className={`${toggle ? `opacity-100`:`opacity-0`} transition-opacity delay-100`}>
                <div className={`${toggle ? `block`:`hidden`} absolute`}>
            <div className="flex flex-col">
              <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/dash"}>Bilhetes</Link></span>
              <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/dash"}>Financeiro</Link></span>
              <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/dash"}>Bilhetes</Link></span>
              <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/dash"}>Sair</Link></span>
          </div>
         </div>
          </div>
        </div>
        <nav className="flex items-center bg-gray-800 hover:bg-gray-700 p-1">
          <div className="cursor-pointer" onClick={() => signOut()}>
            Sair
          </div>
        </nav>
      </header>
    </>
  );
}
