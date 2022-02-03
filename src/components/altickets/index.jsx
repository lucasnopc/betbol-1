import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../../utills/useFetch";
import FullLoading from "../fullloading";
import ItemListTicket from "./itemlistticket";

export default function AllTickets() {
  const [statusSearch, setStatusSearch] = useState('Todos');
  const { data, error } = useFetch(`/api/adm/getticket`);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  if (!data) <FullLoading />;
  if (error) console.log("err", error);
  const changeStatusSearch = (e) => {
    console.log(e.target.value == "true", e.target);
  };
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xs uppercase">Bilhetes</h2>
      <div>
        <span onClick={ () => setStatusSearch('Todos')}  className={`${statusSearch == "Todos" ? `bg-yellow-600` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 cursor-pointer`}>Todos</span>
        <span onClick={ () => setStatusSearch('Ganhou')} className={`${statusSearch == "Ganhou" ? `bg-green-600` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 ml-1 cursor-pointer`}>Ganhou</span>
        <span onClick={ () => setStatusSearch('Perdeu')} className={`${statusSearch == "Perdeu" ? `bg-red-600` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 cursor-pointer`}>Perdeu</span>
      </div>
      <div className="bg-gray-100 flex justify-between px-2 border-b border-gray-200">
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Data | Hora
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Escolhas
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Status
        </span>
      </div>
      <div className="h-36 overflow-auto">
        {data &&
          data.bilhete.reverse().map((bi) => {
            return (
              <ItemListTicket
                key={bi._id}
                bi={bi}
                statusSearch={statusSearch}
              />
            );
          })}
      </div>
    </div>
  );
}
