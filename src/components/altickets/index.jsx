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
        <span onClick={ () => setStatusSearch('Todos')}  className={`${statusSearch == "Todos" ? `bg-gray-600 text-white` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 cursor-pointer transition-colors`}>Todos</span>
        <span onClick={ () => setStatusSearch('Ganhou')} className={`${statusSearch == "Ganhou" ? `bg-green-500 text-white` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 ml-1 cursor-pointer transition-colors`}>Ganhou</span>
        <span onClick={ () => setStatusSearch('Perdeu')} className={`${statusSearch == "Perdeu" ? `bg-red-600 text-white` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 cursor-pointer transition-colors`}>Perdeu</span>
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
          data.bilhete.map((bi) => <ListBetsHistory bi={bi} key={bi._id} />)}
      </div>
    </div>
  );
}
