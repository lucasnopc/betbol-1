import { signOut } from "next-auth/client";
import { useState } from "react";
import Hamburguer from "./hamburguer";
import Link from "next/link";
import { AiOutlineHome } from 'react-icons/ai'

export default function HeaderAdmin() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="text-xs bg-gray-900 bg-opacity-80 text-white font-normal fixed flex justify-between z-20 w-full top-0">
        <Link href="/"><span className="group hover:bg-gray-700 bg-gray-800 cursor-pointer items-center flex px-1"><AiOutlineHome className="transition-transform group-hover:-rotate-12" /> <span className="ml-1">Home</span></span></Link>
        <div className=" hover:bg-gray-700 bg-gray-800 cursor-pointer">
        <Hamburguer toggle={toggle} setToggle={setToggle} />
          <div className={`${toggle ? `opacity-100`:`opacity-0`} transition-opacity delay-100`}>
                <div className={`${toggle ? `block`:`hidden`} absolute`}>
            <div className="flex flex-col">
              <Link href={"/adm/tickets"}><a className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1">Bilhetes</a></Link>
              <Link href={"/adm/fin"}><a className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1">Financeiro</a></Link>
              <Link href={"/adm/config"}><a className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1">Configurações</a></Link>
              <Link href={"/adm/cambista"}><a className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1">Cambistas</a></Link>
          </div>
         </div>
          </div>
        </div>
        <nav className="flex items-center bg-gray-800 hover:bg-gray-700 p-1">
              <span onClick={() => signOut()}>Sair</span>
        </nav>
      </header>
    </>
  );
}
