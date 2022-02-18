import { signout } from "next-auth/client";
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
              <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/tickets"}>Bilhetes</Link></span>
              <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/fin"}>Financeiro</Link></span>
              <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/config"}>Configurações</Link></span>
              {/* <span className="bg-gray-900 hover:bg-gray-800 uppercase font-semibold text-xs p-1"><Link href={"/adm/"}>Créditos</Link></span> */}
              {/* <span className="bg-gray-900 hover:bg-gray-800 uppercase text-xs p-1" onClick={() => signout()}>Sair</span> */}
          </div>
         </div>
          </div>
        </div>
        <nav className="flex items-center bg-gray-800 hover:bg-gray-700 p-1">
          <div className="cursor-pointer" onClick={() => console.log('sair')}>
            Sair
          </div>
        </nav>
      </header>
    </>
  );
}
